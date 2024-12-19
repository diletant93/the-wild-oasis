import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useSignUp } from "./useSignUp";
import Spinner from '../../ui/Spinner'
// Email regex: /\S+@\S+\.\S+/

function SignupForm() {
  const {register, handleSubmit,reset,getValues, formState} = useForm()
  const {isSigningUp , signUp} = useSignUp()
  const {errors} = formState
  function onSubmit({fullName,email,password}){
    signUp({
       fullName,
       email,
       password
      },{
        onSettled:()=>reset()
      })
  }
  if(isSigningUp) return <Spinner/>
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Full name" error={errors?.fullName?.message}>
        <Input type="text" id="fullName" {...register('fullName',{
          required:'Name is required'
        })}/>
      </FormRow>

      <FormRow label="Email address" error={errors?.email?.message}>
        <Input type="email" id="email" {...register('email',{
          required:'Email is required',
          pattern:{
            value:/\S+@\S+\.\S+/,
            message:'Please provide a valid email address'
          }
        })}/>
      </FormRow>

      <FormRow label="Password (min 8 characters)" error={errors?.password?.message}>
        <Input type="password" id="password" {...register('password',{
          required:'Password is required',
          minLength:{
            value:8,
            message:'Your password has to have 8 characters'
          }
        })}/>
      </FormRow>

      <FormRow label="Repeat password" error={errors?.passwordConfirm?.message}>
        <Input type="password" id="passwordConfirm" {...register('passwordConfirm',{
          required:'Confirm password',
          validate:(value) => getValues().password === value || 'Passwords does not match'
        })}/>
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button>Create new user</Button>
      </FormRow>
    </Form>
  );
}

export default SignupForm;
