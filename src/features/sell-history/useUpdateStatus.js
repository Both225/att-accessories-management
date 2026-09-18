import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updatePaid as updatePaidApi } from "../../services/apiSales";

export function useUpdateStatus() {
  const queryClient = useQueryClient();
  const {
    isLoading: isUpdating,
    mutate: updatePaid,
    error,
  } = useMutation({
    mutationFn: ({ id, paid }) => updatePaidApi({ id, paid }),
    onSuccess: () => {
      toast.success("Product paid");
      queryClient.invalidateQueries(["sales"]);
    },
    onError: () => toast.error(error),
  });

  return { isUpdating, updatePaid };
}
