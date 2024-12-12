import { useForm } from 'react-hook-form';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import { useSettings } from './useSettings';
import Button from '../../ui/Button';
import Spinner from '../../ui/Spinner';
import { useEditSetting } from './useEditSetting';

function UpdateSettingsForm() {
  const {isLoading ,data:{
    minBookingLength,
    maxBookingLength,
    maxGuestsPerBooking,
    breakfastPrice
  }= {}} = useSettings()
  const {isLoading:isUpdating, mutate:updateSetting} = useEditSetting()
  function handleUpdate(e, field){
    updateSetting({[field]:e.target.value})
  }
  if(isLoading) return <Spinner/>
  return (
    <Form>
      <FormRow label='Minimum nights/booking'>
        <Input type='number' defaultValue={minBookingLength} id='min-nights'
        onBlur={(e)=> handleUpdate(e,'minBookingLength')}
        disabled={isUpdating}
        />
      </FormRow>
      <FormRow label='Maximum nights/booking'>
        <Input type='number' defaultValue={maxBookingLength} id='max-nights'
         onBlur={(e)=> handleUpdate(e,'maxBookingLength')}
         disabled={isUpdating}/>
      </FormRow>
      <FormRow label='Maximum guests/booking'>
        <Input type='number' defaultValue={maxGuestsPerBooking} id='max-guests'
         onBlur={(e)=> handleUpdate(e,'maxGuestsPerBooking')}
         disabled={isUpdating}/>
      </FormRow>
      <FormRow label='Breakfast price'>
        <Input type='number' defaultValue={breakfastPrice} id='breakfast-price'
         onBlur={(e)=> handleUpdate(e,'breakfastPrice')}
         disabled={isUpdating}/>
      </FormRow>
      <Button>Save</Button>
    </Form>
  );
}

export {UpdateSettingsForm};
