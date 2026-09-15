import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/apiProducts";
import toast from "react-hot-toast";

export function useInventory() {
  const {
    isLoading,
    data: products,
    error,
  } = useQuery({
    queryKey: ["inventory"],
    queryFn: getProducts,
  });

  if (error) {
    toast("Can't not load products");
  }

  return { isLoading, products };
}
