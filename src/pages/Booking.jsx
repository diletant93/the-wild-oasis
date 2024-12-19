import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import BookingDetail from "../features/bookings/BookingDetail";

function Booking() {
  return (
    <BookingDetail/>
  );
}

export default  Booking;