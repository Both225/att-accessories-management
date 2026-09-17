import { useQuery } from "@tanstack/react-query";
import { getProduct as getProductApi } from "../../services/apiProducts";
import { useSearchParams } from "react-router-dom";

export function useSearchProduct() {
  const [searchParams] = useSearchParams();

  const name = searchParams.get("name") || null;

  const { isLoading: isSearching, data: product } = useQuery({
    queryFn: () => getProductApi({ name }),
    queryKey: ["inventory"],
  });

  return { isSearching, product };
}
