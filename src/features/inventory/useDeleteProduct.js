import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProduct as deleteProductApi } from "../../services/apiProducts";
import toast from "react-hot-toast";

export function useDeleteProduct() {
  const queryClient = useQueryClient();
  const { isLoading: isDeleting, mutate: deleteProduct } = useMutation({
    mutationFn: ({ productId }) => deleteProductApi({ productId }),
    onSuccess: () => {
      toast("Product delete success");
      queryClient.invalidateQueries(["inventory"]);
    },
    onError: (error) => console.log(error),
  });

  return { isDeleting, deleteProduct };
}
