import { useForm } from "react-hook-form";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";
import { useCreateCabin } from "./useCreateCabin";
import { useEditCabin } from "./useEditCabin";

function CreateCabinForm({onCloseModal,cabinToEdit = {}}) {
  const {id:editId, ...editValues} = cabinToEdit
  const isEditSession = Boolean(editId)
  const {register ,handleSubmit, reset, getValues, formState} = useForm({
    defaultValues: isEditSession ? editValues : {}
  })
  const {errors} = formState;
  console.log(errors)

  const {isLoading:isCreating, mutate:createCabin} = useCreateCabin()

  const {isLoading:isEditing, mutate:editCabin} = useEditCabin()

  const isWorking = isCreating || isEditing
  function cleanOnSuccess(data){
    reset()
    onCloseModal?.()
  }
  function onSubmit(data){
    const image = typeof data.image === 'string' ? data.image : data.image[0]
    console.log(image)
    if(isEditSession) editCabin({newCabin:{...data,image:image}, id:editId},{
      onSuccess:cleanOnSuccess
    })
    else createCabin({...data,image:image}, {
      onSuccess:cleanOnSuccess
  })
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)} type={onCloseModal? 'modal': 'regualr'}>
      <FormRow label='name' error={errors?.name?.message}>
        <Input disabled={isWorking} type="text" id="name" {...register('name',
          {
            required:'this field is required'
          }
        )}/>
      </FormRow>

      <FormRow label='Maximum Capacity' error={errors?.maxCapacity?.message}>
        <Input disabled={isWorking} type="number" id="maxCapacity" {...register('maxCapacity',
          {
            required:'this field is required',
            min:{
              value:1,
              message:'Capacity should be at least at 1'
            },
            max:{
              value:10,
              message:'Capacity is 10 at most'
            }
          })}/>
      </FormRow>

      <FormRow label='Regular Price' error={errors?.regularPrice?.message}>
        <Input disabled={isWorking} type="number" id="regularPrice" {...register('regularPrice',
          {
            required:'this field is required',
            min:{
              value:1,
              message:'Capacity should be at least at 1'
            },
          })}/>
      </FormRow>

      <FormRow label='Discount' error={errors?.discount?.message}>
        <Input disabled={isWorking} type="number" id="discount" defaultValue={0} {...register('discount',
          {
            required:'this field is required',
            min:{
              value:0,
              message:'Capacity should be at least at 1'
            },
            validate: (value) =>{
              return value <= Number(getValues().regularPrice) || 'Discount should be less than regular price'
            } 
          })}/>
      </FormRow>

      <FormRow label='Description for website' errors={errors?.description?.message}>
        <Textarea disabled={isWorking} type="number" id="description" defaultValue="" {...register('description',
          {
            required:'this field is required'
          })}/>
      </FormRow>

      <FormRow label='Cabin photo'>
        <FileInput disabled={isWorking} id="image" accept="image/*" {...register('image',
          {
            required: isEditSession ? false : 'this field is required'
          })}/>
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset" onClick={() => onCloseModal?.()}>
          Cancel
        </Button>
        <Button type="submit" disabled={isWorking}>{isEditSession ? 'Edit' : 'Add cabin'}</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
