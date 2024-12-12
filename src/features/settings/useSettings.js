import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { getSettings } from "../../services/apiSettings";

function useSettings(){
    const {isLoading, error, data} = useQuery({
        queryKey:['settings'],
        queryFn:getSettings
    })
    return {isLoading, error, data}
}

export {useSettings}
