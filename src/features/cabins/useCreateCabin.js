import { useQueryClient, useMutation } from "@tanstack/react-query"
import { createEditCabin } from "../../services/apiCabins"
import toast from "react-hot-toast"
function useCreateCabin(){
    const queryClient = useQueryClient()
    const {isLoading, mutate} = useMutation({
        mutationFn: createEditCabin,
        onSuccess: function(){
          queryClient.invalidateQueries({
            queryKey:['cabins']
          })
          toast.success('You added a new cabin')
        },
        onError: (error) => toast.error(error.message)
      })
    return {isLoading, mutate}
}
export {useCreateCabin}