import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import styled from "styled-components";

const Main = styled.main`
    background-color: var(--color-grey-50);
    padding: 4rem 4.8rem 6.4rem;
    overflow-y: auto;
`
const StyledApplayout = styled.div`
    height: 100dvh;
    display: grid;
    grid-template-columns: 26rem 1fr;
    grid-template-rows: auto 1fr;
`
const Container = styled.div`
max-width: 120rem;
margin:0 auto;
display: flex;
flex-direction: column;
gap: 3.2rem;
`
function Applayout() {
  return (
    <StyledApplayout>
        <Header />
        <Sidebar />
        <Main>
          <Container>
            <Outlet />
          </Container>
        </Main>
    </StyledApplayout>
  );
}

export default  Applayout;