import styled from "styled-components";
import BookingDataBox from "../../features/bookings/BookingDataBox";

import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";

import Spinner from "../../ui/Spinner";
import Checkbox from "../../ui/Checkbox";

import { useEffect, useState } from "react";
import { useBooking } from "../bookings/useBooking";
import { formatCurrency } from "../../utils/helpers";
import { useChecking } from "./useChecking";
import { useSettings } from "../settings/useSettings";
import { useMoveBack } from "../../hooks/useMoveBack";
import { HiArrowUpOnSquare } from "react-icons/hi2";
import { useCheckout } from "./useCheckout";

const Box = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`;

function CheckinBooking() {
  const moveBack = useMoveBack();
  const{booking,isLoading} = useBooking()
  const [confirmPaid, setConfirmPaid] = useState(false)
  const [addBreakfast, setAddBreakFast] = useState(false)
  const {isLoading:isLoadingSettings,data:settings} = useSettings()
  const {
    id: bookingId,
    guests,
    totalPrice,
    numGuests,
    hasBreakfast,
    numberNights,
  } = booking;
  console.log(booking)
  const optionalBreakfastPrice = settings?.breakfastPrice * numberNights * numGuests
  useEffect(function(){
    setConfirmPaid(booking?.isPaid ?? false)
  },[booking.isPaid])
  const {isCheckingIn, checkin} = useChecking()
  function handleCheckin() {
    if(!confirmPaid) return
    if(addBreakfast){
      checkin({bookingId,breakfast:{
        hasBreakfast:true,
        extrasPrice:optionalBreakfastPrice,
        totalPrice: totalPrice + optionalBreakfastPrice
      }})
    }
    else{
      checkin({bookingId,breakfast:{}})
    }   
  }
  function handleAddBreakFast(){
    setAddBreakFast(add => !add)
    setConfirmPaid(false)
  }
  if(isLoading) return <Spinner/>
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Check in booking #{bookingId}</Heading>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>
     
      <BookingDataBox booking={booking} />
     {!hasBreakfast &&  <Box>
        <Checkbox 
        checked={addBreakfast}
        onChange={handleAddBreakFast}  
        id="breakfast"
        >
         Want to add breakfast for {optionalBreakfastPrice}?
        </Checkbox>
      </Box>}
      <Box>
        <Checkbox 
          checked={confirmPaid}
          onChange={()=>setConfirmPaid(confirm => !confirm)}
          disabled={confirmPaid || isCheckingIn}
        >
          I confirm that {guests.fullName} has 
          paid the total amount of {!addBreakfast ? formatCurrency(totalPrice):`${formatCurrency(totalPrice+optionalBreakfastPrice)} (${formatCurrency(totalPrice)}+${formatCurrency(optionalBreakfastPrice)})`}
        </Checkbox>
      </Box>
      <ButtonGroup>
        <Button disabled={!confirmPaid || isCheckingIn} onClick={handleCheckin}>Check in booking #{bookingId}</Button>
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default CheckinBooking;
