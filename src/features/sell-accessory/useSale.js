import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addSale as addSaleApi } from "../../services/apiSales";
import toast from "react-hot-toast";

export function useSale() {
  const queryClient = useQueryClient();
  const {
    isLoading: isAdding,
    mutate: addSale,
    error,
  } = useMutation({
    mutationFn: (sale) => addSaleApi(sale),
    onSuccess: () => {
      toast.success("Product sold");
      queryClient.invalidateQueries(["cart"]);
    },
    onError: () => {
      console.log(error);
      toast.error("Product can't sold");
    },
  });

  return { isAdding, addSale };
}
