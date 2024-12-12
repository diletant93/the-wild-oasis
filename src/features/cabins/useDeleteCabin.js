import { useQueryClient, useMutation } from "@tanstack/react-query"
import { deleteCabin } from "../../services/apiCabins"
import toast from "react-hot-toast"
function useDeleteCabin(){
    const queryClient = useQueryClient()
    
      const {isLoading, mutate} = useMutation({
         mutationFn:deleteCabin,
         onSuccess: function(){
          toast.success(`You successfully deleted the cabin number ${name}`)
          queryClient.invalidateQueries({
            queryKey:['cabins']
          })
         },
         onError:(err) => toast.error(err.message)
      })
      return {isLoading, mutate}
}

export {useDeleteCabin}