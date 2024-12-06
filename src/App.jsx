import { useState } from 'react'
import styled from 'styled-components'
import GlobalStyles from './styles/GlobalStyles'
import Button from './ui/Button'
import Input from './ui/Input'
import Heading from './ui/Heading'
import Row from './ui/Row'
const StyledApp = styled.div`
  background-color: #8a8a8a;

`
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <GlobalStyles/>
    <StyledApp>
      <Row type='horizontal'>
      <Heading as='h1'>Hello</Heading>
      <div>
        <Heading as='h2'>Hello</Heading>
        <Heading as='h2'>Hello</Heading>
      </div>
      </Row>
      <Row type='vertical'>
        <Heading as='h3'>Form</Heading>
        <form action="">
          <Input type='number' name='number' placeholder='Number of guests' disabled={true}/>
          <Button onClick={(e)=>{}}>Check in</Button>
        </form>
      </Row>
    </StyledApp>
    </>
  )
}

export default App
