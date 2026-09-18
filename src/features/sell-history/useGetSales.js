import { useQuery } from "@tanstack/react-query";
import { getSales as getSalesApi } from "../../services/apiSales";
import toast from "react-hot-toast";
import { useSearchParams } from "react-router-dom";

export function useGetSales() {
  const [searchParams] = useSearchParams();

  const isPaidRaw = searchParams.get("isPaid") || "all";

  const isPaid = isPaidRaw === "paid" ? true : isPaidRaw === "noPaid" && false;

  const {
    isLoading,
    data: products,
    error,
  } = useQuery({
    queryKey: ["history", isPaid, isPaidRaw],
    queryFn: () => getSalesApi({ isPaid, isPaidRaw }),
  });

  if (error) {
    console.log(error);
    toast.error(error);
  }

  return { isLoading, products };
}
