import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteReminder as deleteReminderApi } from "../../services/apiReminder";
import toast from "react-hot-toast";

export function useDeleteReminder() {
  const queryClient = useQueryClient();
  const {
    isLoading: isDeleting,
    mutate: deleteReminder,
    error,
  } = useMutation({
    mutationFn: ({ id }) => deleteReminderApi({ id }),
    onSuccess: () => {
      toast.success("Note delete success");
      queryClient.invalidateQueries(["reminder"]);
    },
    onError: () => toast.error(error),
  });

  return { isDeleting, deleteReminder };
}
