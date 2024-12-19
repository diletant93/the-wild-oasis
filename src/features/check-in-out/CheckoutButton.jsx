import Button from "../../ui/Button";
import { useCheckout } from "./useCheckout";

function CheckoutButton({ bookingId }) {
  const {isCheckingOut, checkout} = useCheckout()
  function handleClick(){
    checkout(bookingId)
  }
  return (
    <Button disabled={isCheckingOut} onClick={handleClick} variation="primary" size="small">
      Check out
    </Button>
  );
}

export default CheckoutButton;
