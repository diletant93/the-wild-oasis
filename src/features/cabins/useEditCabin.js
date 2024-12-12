import { useQueryClient, useMutation } from "@tanstack/react-query"
import { createEditCabin } from "../../services/apiCabins"
import toast from "react-hot-toast"

function useEditCabin(){
    const queryClient = useQueryClient()
    const {isLoading, mutate} = useMutation({
        mutationFn: ({newCabin, id}) => createEditCabin(newCabin,id),
        onSuccess: function(){
          queryClient.invalidateQueries({
            queryKey:['cabins']
          })
          toast.success('You edited the cabin')
        },
        onError: (error) => toast.error(error.message)
      })
      return {isLoading, mutate}
}
export {useEditCabin}