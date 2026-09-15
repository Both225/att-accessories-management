import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addProduct as addProductApi } from "../../services/apiProducts";
import toast from "react-hot-toast";

export function useAddProduct() {
  const queryClient = useQueryClient();
  const { isLoading: isAdding, mutate: addProduct } = useMutation({
    mutationFn: (newProduct) => addProductApi(newProduct),
    onSuccess: () => {
      toast.success("Product add success");
      queryClient.invalidateQueries(["inventory"]);
    },
    onError: (error) => console.log(error),
  });

  return { isAdding, addProduct };
}
