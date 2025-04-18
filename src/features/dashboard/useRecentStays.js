import { useQuery } from "@tanstack/react-query"
import { subDays } from "date-fns"
import { useSearchParams } from "react-router-dom"
import { getStaysAfterDate } from "../../services/apiBookings"

function useRecentStays(){
    const [searchParams] = useSearchParams()
    const numDays = Number(searchParams.get('last')) || 7
    const queryDate = subDays(new Date(), numDays).toISOString()
     const {isLoading , data:stays,error} = useQuery({
        queryKey:['stays', `last-${numDays}`],
        queryFn:()=>getStaysAfterDate(queryDate),
     })

     const confirmedStays = stays?.filter(stay => stay.status === 'checked-in' || stay.status === 'checked-out')
     console.log('here:',stays)
     console.log('herex2:',confirmedStays)
     return {isLoading , stays,error, confirmedStays , numDays}
}

export {useRecentStays}