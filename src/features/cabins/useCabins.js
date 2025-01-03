import { useQuery } from "@tanstack/react-query"
import { getCabins } from "../../services/apiCabins"

function useCabins(){
    const {isLoading , data} = useQuery({
        queryKey:['cabins'],
        queryFn:getCabins
      })
    return {isLoading,data}
}
export {useCabins}