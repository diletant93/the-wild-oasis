import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
function useLogout(){
    const queryClient = useQueryClient()
    const navigate = useNavigate()
    const {isLoading:isLogginOut, mutate:logout} = useMutation({
        mutationFn:logoutApi,
        onSuccess:()=> {
            queryClient.removeQueries()
            navigate('/login')
            toast.success('You logged out')
        },
        onError:(error) => toast.error(error.message)
    })
    return {isLogginOut, logout}
}
export {useLogout}