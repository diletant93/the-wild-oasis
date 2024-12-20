import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function useChecking(){
    const queryClient = useQueryClient()
    const navigate = useNavigate()
    const {isLoading:isCheckingIn, mutate:checkin} = useMutation({
        mutationFn:({bookingId,breakfast})=>updateBooking(bookingId,{
                status:"checked-in",
                isPaid:true,
                ...breakfast
            }),
        onSuccess:(data)=>{
            toast.success(`Booking #${data.id} successfully checked in`)
            queryClient.invalidateQueries({
                queryKey:['booking']
            })
            navigate('/')
        },
        onError:(error)=> toast.error(error.message)
    })
    return {checkin, isCheckingIn}
}
export {useChecking}