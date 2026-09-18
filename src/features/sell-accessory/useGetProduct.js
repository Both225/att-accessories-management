import { useQuery } from "@tanstack/react-query";
import { getProduct as getProductApi } from "../../services/apiProducts";
import { useSearchParams } from "react-router-dom";

export function useGetProduct() {
  const [searchParams] = useSearchParams();

  const productId = Number(searchParams.get("productId")) || null;

  const { isLoading, data: product } = useQuery({
    queryKey: ["cart", productId],
    queryFn: () => getProductApi({ productId }),
  });

  return { isLoading, product };
}
