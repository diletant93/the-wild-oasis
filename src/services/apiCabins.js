import supabase, { supabaseUrl } from "./supabase"
async function getCabins(){
    let {data: cabins, error} = await supabase
    .from('cabins')
    .select('*')
    if(error){
        console.error(error)
        throw new Error('Cabins could not be loaded')
    }
    return cabins
}
async function deleteCabin(id){
    let {data:cabin, error} = await supabase
    .from('cabins')
    .delete()
    .eq('id',id)
    if (error){
        console.error(error)
        throw new Error('The cabin could not be deleted')
    }
    return cabin
}

async function createEditCabin(newCabin, id){
    console.log(newCabin,id)
    const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl)

    const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll('/','')
    const imagePath = hasImagePath ? newCabin.image : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`
   
    let query = supabase.from('cabins')
    if(!id)query = query.insert([{...newCabin,image:imagePath}])

    if(id)query = query.update({...newCabin,image:imagePath}).eq('id',id)

    const {data:cabin, error} = await query.select().single() 
       
     if (error){
        console.error(error)
        throw new Error('The cabin could not be created or updated')
    }

    if(hasImagePath) return cabin

    const {error:storageError} = await supabase.storage
    .from('cabin-images')
    .upload(imageName, newCabin.image)
    if(storageError){
        await supabase
        .from('cabins')
        .delete()
        .eq('id',cabin.id)
        console.log(storageError)
        throw new Error('Cabin image could not be uploaded and the cabin was not created')
    }
    
    return cabin
}

export {getCabins, deleteCabin, createEditCabin}