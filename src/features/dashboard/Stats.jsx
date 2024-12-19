import { HiOutlineBanknotes, HiOutlineBriefcase, HiOutlineCalendarDays, HiOutlineChartBar } from "react-icons/hi2";
import Stat from "./Stat";
import { formatCurrency, formatPercentage } from "../../utils/helpers";

function Stats({bookings,confirmedStays, numDays, cabinCount}) {
    const numBookings = bookings.length
    const sales = bookings.reduce((acc, next) => acc += next.totalPrice, 0)
    const checkins = confirmedStays.length
    const occupation =confirmedStays.reduce((acc,next)=> acc += next.numberNights, 0) / (numDays * cabinCount)

  return (
    <>
        <Stat title='Bookings' color='blue' icon={<HiOutlineBriefcase/>} value={numBookings}/>
        <Stat title='Sales' color='green' icon={<HiOutlineBanknotes/>} value={formatCurrency(sales)}/>
        <Stat title='Check ins' color='indigo' icon={<HiOutlineCalendarDays/>} value={checkins}/>
        <Stat title='Occupancy rate' color='yellow' icon={<HiOutlineChartBar/>} value={formatPercentage(occupation)}/>
    </>
  );
}

export default  Stats;