import styled from "styled-components";
import { useMode} from "../contexts/ModeProvider";
import { Link } from "react-router-dom";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

function Logo() {
  const {isLightMode} = useMode()
  const src = !isLightMode? "/logo-light.png":'/logo-dark.png'
  return (
    <StyledLogo>
      <Link to='/'>
        <Img src={src} alt="Logo"  />
      </Link>
    </StyledLogo>
  );
}

export default Logo;
