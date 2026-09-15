import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProduct as updateProductApi } from "../../services/apiProducts";
import toast from "react-hot-toast";

export function useUpdateProduct() {
  const queryClient = useQueryClient();
  const {
    isLoading: isUpdating,
    mutate: updateProduct,
    error,
  } = useMutation({
    mutationFn: ({ productId, updateData }) => {
      return updateProductApi({ productId, updateData });
    },
    onSuccess: () => {
      toast.success("Product update successful");
      queryClient.invalidateQueries(["inventory"]);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return { isUpdating, updateProduct };
}
