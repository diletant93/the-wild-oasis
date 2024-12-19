import { useQueryClient, useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateCurrentUser } from "../../services/apiAuth";

function useUpdateUser() {
  const queryClient = useQueryClient();
  const { isLoading:isUpdating, mutate:updateUser } = useMutation({
    mutationFn: ({password, fullName, avatar}) => updateCurrentUser({password,fullName,avatar}),
    onSuccess: (data) => {
      toast.success(`You successfully updated user`);
      queryClient.invalidateQueries({
        queryKey: ["user"]
      });
    },
    onError: (err) => toast.error(err.message)
  });

  return { isUpdating, updateUser };
}

export { useUpdateUser };