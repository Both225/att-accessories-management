import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addReminder as addReminderApi } from "../../services/apiReminder";
import toast from "react-hot-toast";

export function useAddReminder() {
  const queryClient = useQueryClient();
  const {
    isLoading: isAdding,
    mutate: addReminder,
    error,
  } = useMutation({
    mutationFn: ({ name, priority }) => addReminderApi({ name, priority }),
    onSuccess: () => {
      toast.success("Reminder added");
      queryClient.invalidateQueries(["reminder"]);
    },
    onError: () => toast.error(error),
  });

  return { isAdding, addReminder };
}
