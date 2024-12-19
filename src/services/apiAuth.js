import supabase, { supabaseUrl } from "./supabase";
async function login({email,password}){    
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    })
    if(error) throw new Error(error.message)
    console.log(data)
    return data
}
async function logout(){
    const {error} = await supabase.auth.signOut()

    if(error) throw new Error(error.message)
}
async function getCurrentUser(){
    const {data:session} = await supabase.auth.getSession()
    if(!session.session) return null

    const {data, error} = await supabase.auth.getUser()

    if(error) throw new Error(error.message)

    return data?.user 
}
async function signUp({fullName, email,password}){
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options:{
            data:{
                fullName,
                avatar:''
            }
        }
    })

    if(error) throw new Error(error.message)

    return data
}
async function updateCurrentUser({password,fullName,avatar}){
    let updateData;
    if(password) updateData = {password}
    if(fullName) updateData = {data:{fullName}}

    const {data,error} = await supabase.auth.updateUser(updateData)
   
    if(error) throw new Error(error.message)
    
    if(!avatar) return data

    //unique filename
    const fileName = `avatar-${data.user.id}-${Math.random()}`.replaceAll('/','')
    const filePath = `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`

    const {error:storageError} = await supabase.storage
    .from('avatars')
    .upload(fileName,avatar)

    if(storageError) throw new Error(storageError.message)

    const {data:updatedUser , error:userError} = await supabase
    .auth
    .updateUser({
        data:{
            avatar: filePath
        }
    })

    if(userError) throw new Error(userError.message)
    
   return updatedUser
   // create object with the prop relatively to what's coming : either the password or the name
   //passed the created object to the .auth.updateUser(updateObject)
   // if there is no avatar then return data
   //if there is then 
   //1 create the fileName and the filePath
   //2 upload the image using .storage.upload(fileName , fileItself)
   //3 update the metadata of the user that has the avatar prop that contains the filePath
   //using the .auth.updateUser({data:{props}})


}
export {login, logout, signUp, getCurrentUser, updateCurrentUser}