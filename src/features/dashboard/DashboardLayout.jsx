import styled from "styled-components";
import { useRecentBookings } from "./useRecentBookings";
import Spinner from "../../ui/Spinner";
import { useRecentStays } from "./useRecentStays";
import Stats from "./Stats";
import { useCabins } from "../cabins/useCabins";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const {isLoading , bookings} = useRecentBookings()
  const {isLoading:isLoadingStays, stays, confirmedStays ,numDays} = useRecentStays()
  const {isLoading:isLoadingCabins, cabins} = useCabins()
  if(isLoading || isLoadingStays || isLoadingCabins)return <Spinner/>

  console.log(bookings)
  return (
    <StyledDashboardLayout>
      <Stats bookings={bookings} confirmedStays={confirmedStays} numDays={numDays} cabinCount={5}/>
      <div>Today&apos;s activity</div>
      <div>Chart stay durations</div>
      <div>Chart sales</div>
      </StyledDashboardLayout>
  );
}

export default  DashboardLayout;