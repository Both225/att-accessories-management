import { useQuery } from "@tanstack/react-query";
import { getSales as getSalesApi } from "../../services/apiSales";
import toast from "react-hot-toast";
import { useSearchParams } from "react-router-dom";

export function useGetSales() {
  const [searchParams] = useSearchParams();

  const isPaidRaw = searchParams.get("isPaid") || "all";

  const isPaid = isPaidRaw === "paid" ? true : isPaidRaw === "noPaid" && false;

  const today = new Date().toISOString().split("T")[0];

  const selectedDate = searchParams.get("date") || today;

  const {
    isLoading,
    data: products,
    error,
  } = useQuery({
    queryKey: ["sales", isPaid, isPaidRaw, selectedDate],
    queryFn: () => getSalesApi({ isPaid, isPaidRaw, selectedDate }),
  });

  if (error) {
    console.log(error);
    toast.error(error);
  }

  return { isLoading, products };
}
