import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical";
import { useLogin } from "./useLogin";
import SpinnerMini from "../../ui/Spinner";

function LoginForm() {
  const [email, setEmail] = useState("bob@example.com");
  const [password, setPassword] = useState("test12345");
  const {isLoggingIn, login} = useLogin()
  function cleanFields(){
    setEmail('')
    setPassword('')
  }
  function handleSubmit(e) {
    e.preventDefault()
    if(!email || !password) return
    
    login({email,password},{
      onSettled:cleanFields
    })
  }
  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="Email address">
        <Input
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoggingIn}
        />
      </FormRowVertical>
      <FormRowVertical label="Password">
        <Input
         
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoggingIn}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button size="large" disabled={isLoggingIn}>
          {!isLoggingIn ? 'Log in': <SpinnerMini/>}
        </Button>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;
