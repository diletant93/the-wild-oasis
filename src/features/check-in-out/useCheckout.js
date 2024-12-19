import { useMutation, useQueries, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function useCheckout(){
    const queryClient = useQueryClient()
    const navigate = useNavigate()
    const {isLoading:isCheckingOut, mutate:checkout} = useMutation({
        mutationFn:(bookingId)=>updateBooking(bookingId,{
            status:'checked-out'
        }),
        onSuccess:(data)=>{
            toast.success(`Booking #${data.id} successfully checked out`)
            queryClient.invalidateQueries({
                queryKey:{active:true}
            })
        },
        onError:(error)=> toast.error(error.message)
    })
    return {checkout, isCheckingOut}
}
export {useCheckout }