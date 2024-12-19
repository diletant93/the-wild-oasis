import { HiOutlineTrash } from "react-icons/hi2";
import ConfirmDelete from "../ui/ConfirmDelete";
import Modal from "../ui/Modal";
import { useDeleteBooking } from "../features/bookings/useDeleteBooking";
import Button from "../ui/Button";

function ExperimentalPage() {
    const {isDeleting , deleteBooking} = useDeleteBooking()
    function handleDelete(){
        
    }
  return (
    <Modal>
        <Modal.Open opens='delete-booking'>
            <Button>
                <HiOutlineTrash />
                <span>Delete booking</span>
            </Button>
        </Modal.Open>
        <Modal.Window name='delete-booking'>
            <ConfirmDelete resourceName='booking' onConfirm={handleDelete} disabled={isDeleting} />
        </Modal.Window>
    </Modal> 
  );
}

export default  ExperimentalPage;