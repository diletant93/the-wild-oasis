import { useMutation, useQueries, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";
import { useNavigate } from "react-router-dom";
function useDeleteBooking(){
    const queryClient = useQueryClient()
    const navigate = useNavigate()
    const {isLoading:isDeleting, mutate:deleteBooking, error} = useMutation({
        mutationFn:(bookingId)=>deleteBookingApi(bookingId),
        onSuccess:(data) =>{
            toast.success(`Booking was deleted`)
            queryClient.invalidateQueries({queryKey:['bookings']})
        },
        onError:(error) => toast.error(error.message)
    })
    return {isDeleting, deleteBooking}
}
export {useDeleteBooking}