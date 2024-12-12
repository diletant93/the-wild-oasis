import { useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"
import { updateSetting } from "../../services/apiSettings"
function useEditSetting(){
    const queryClient = useQueryClient()
    const {isLoading, mutate} = useMutation({
        mutationFn:updateSetting,
        onSuccess:(data)=> {
            queryClient.invalidateQueries({
                queryKey:['settings']
            })
            toast.success('You updated settings')
        }
    })
    return {isLoading, mutate}
}
export {useEditSetting}