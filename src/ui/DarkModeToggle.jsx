import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import ButtonIcon from "./ButtonIcon";
import { useMode} from "../contexts/ModeProvider";

function DarkModeToggle() {
    const {isLightMode, changeMode} = useMode()
  return (
    <ButtonIcon onClick={changeMode}>
        {!isLightMode? <HiOutlineMoon/> : <HiOutlineSun/>}
    </ButtonIcon>
  );
}

export default  DarkModeToggle;