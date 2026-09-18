import { useQuery } from "@tanstack/react-query";
import { getReminders as getRemindersApi } from "../../services/apiReminder";
import toast from "react-hot-toast";

export function useReminders() {
  const {
    isLoading,
    data: reminders,
    error,
  } = useQuery({
    queryKey: ["reminder"],
    queryFn: () => getRemindersApi(),
  });

  if (error) toast.error(error);

  return { isLoading, reminders };
}
