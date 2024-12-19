import styled from "styled-components";

import BookingDataBox from "./BookingDataBox";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import Tag from "../../ui/Tag";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";

import { useMoveBack } from "../../hooks/useMoveBack";
import { useBooking } from "./useBooking";
import Spinner from "../../ui/Spinner";
import { useCheckout } from "../check-in-out/useCheckout";
import { HiArrowUpOnSquare } from "react-icons/hi2";
import { useDeleteBooking } from "./useDeleteBooking";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { useNavigate } from "react-router-dom";

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function BookingDetail() {
  const {isLoading, booking} = useBooking()
  const {isCheckingOut, checkout} = useCheckout()
  const {isDeleting, deleteBooking} = useDeleteBooking()
  const navigate = useNavigate()
  const moveBack = useMoveBack();
  const {status, id} = booking
  console.log(booking)
  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };
  function handleDelete(){
    deleteBooking(id,{
      onSuccess:()=>navigate('/bookings')
    })
  }
  if(isLoading) return <Spinner/>
  return (
    <>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading as="h1">Booking #{id}</Heading>
          <Tag type={statusToTagName[status]}>{status?.replace("-", " ")}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      <Modal>
      <ButtonGroup>
      {status === 'checked-in' && <Button icon={<HiArrowUpOnSquare/>} onClick={()=>checkout(id)} disabled={isCheckingOut}>
            Checkout
          </Button>}
          {status === 'checked-out' && 
          <Modal.Open opens='delete-booking'>
              <Button variation='danger'  icon={<HiArrowUpOnSquare/>}>
              Delete Booking
            </Button>
          </Modal.Open>
          }
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
      <Modal.Window name='delete-booking'>
                      <ConfirmDelete resourceName='booking' onConfirm={handleDelete} disabled={isDeleting} />
          </Modal.Window>
      </Modal>
    </>
  );
}

export default BookingDetail;
