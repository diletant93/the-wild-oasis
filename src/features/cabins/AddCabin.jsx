import { useState } from "react";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";
import CabinTable from "./CabinTable";

function AddCabin() {
  return (
   <Modal>
    <Modal.Open opens='cabin-form'>
        <Button>Add new Cabin</Button>
    </Modal.Open>
    <Modal.Window name='cabin-form'>
        <CreateCabinForm/>
    </Modal.Window>
    
    <Modal.Open opens='table'>
        <Button>ShowTable</Button>
    </Modal.Open>
    <Modal.Window name='table'>
        <CabinTable />
    </Modal.Window>
   </Modal> 
  )
}

export default  AddCabin;

// function AddCabin() {
//     const [isOpenModal, setIsOpenModal] = useState(false)
//   return (
//     <div>
//          <Button onClick={() => setIsOpenModal(!isOpenModal)}>
//             Add new cabin    
//           </Button>
//         {isOpenModal &&
//          <Modal onClose={() => setIsOpenModal(false)}>
//             <CreateCabinForm onCloseModal={() => setIsOpenModal(false)} />
//         </Modal>}
//     </div>
//   );
// }
