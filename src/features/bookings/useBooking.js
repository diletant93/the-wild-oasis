import { useQuery } from "@tanstack/react-query";
import { getBooking } from "../../services/apiBookings";
import { useParams } from "react-router-dom";

function useBooking(){
    const {id} = useParams()
    const {isLoading , data:booking={},error} = useQuery({
        queryKey:['booking',id],
        queryFn:()=>getBooking(id) ,
        retry:false,
    })
    console.log('inside custom hook',booking)
    return {isLoading,error, booking}
}
export {useBooking}