import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getProducts } from "../../services/apiProducts";
import toast from "react-hot-toast";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/contains";

export function useInventory() {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();

  const page = Number(searchParams.get("page") || 1);
  const category = searchParams.get("category") || "all";

  const {
    isLoading,
    data: { products, count } = {},
    error,
  } = useQuery({
    queryKey: ["inventory", page, category],
    queryFn: () => getProducts({ page, category }),
  });

  // Prefetch data
  const countPage = Math.ceil(count / PAGE_SIZE);

  if (page < countPage) {
    queryClient.query({
      queryFn: () => getProducts({ page }),
      queryKey: ["inventory", page + 1],
    });
  }

  if (error) {
    toast("Can't not load products");
  }

  return { isLoading, products, count };
}
