import { useQuery } from "@tanstack/react-query"
import { subDays } from "date-fns"
import { useSearchParams } from "react-router-dom"
import { getStaysAfterDate } from "../../services/apiBookings"

function useRecentBookings(){
    const [searchParams] = useSearchParams()
    const numDays = Number(searchParams.get('last')) || 7
    const queryDate = subDays(new Date(), numDays).toISOString()
     const {isLoading , data:bookings,error} = useQuery({
        queryKey:['bookings', `last-${numDays}`],
        queryFn:()=>getStaysAfterDate(queryDate),
     })
     return {isLoading , bookings,error}
}

export {useRecentBookings}