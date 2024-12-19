import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { signUp as signUpApi} from "../../services/apiAuth";

function useSignUp() {
  const { isLoading: isSigningUp, mutate:signUp } = useMutation({
    mutationFn: signUpApi,
    onSuccess: (data) => {
      toast.success(`You successfully signed up a user`);
    },
    onError: (err) => toast.error(err.message)
  });

  return { isSigningUp, signUp };
}

export { useSignUp };