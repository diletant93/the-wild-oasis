import { HiArrowRightOnRectangle } from "react-icons/hi2";
import ButtonIcon from "../../ui/ButtonIcon";
import { useLogout } from "./useLogout";
import SpinnerMini from "../../ui/Spinner";

function Logout() {
    const {isLogginOut,logout} = useLogout()
    function handleLogout(){
        logout()
    }
  return (
    <ButtonIcon disabled={isLogginOut} onClick={handleLogout}>
       {!isLogginOut ? <HiArrowRightOnRectangle/> : <SpinnerMini/>}
    </ButtonIcon>
  );
}

export default  Logout;