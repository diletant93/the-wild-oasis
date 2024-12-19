import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function useLogin(){
    const queryClient = useQueryClient()
    const navigate = useNavigate()
    const {isLoading:isLoggingIn , mutate:login} = useMutation({
        mutationFn:({email,password})=> loginApi({email,password}),
        onSuccess:(data)=>{
            queryClient.setQueryData(['user'],data.user)
            toast.success('You were logged in')
            navigate('/dashboard')
        },
        onError:(error)=>toast.error(error.message)
    })
    return {isLoggingIn, login}
}

export {useLogin}