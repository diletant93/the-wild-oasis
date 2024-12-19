import supabase from "./supabase";
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
export {login, logout, signUp, getCurrentUser}