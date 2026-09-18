import supabase from "./supabase";

export async function getReminders() {
  let query = supabase.from("reminder").select("*");

  const { data: reminders, error } = await query;

  if (error) {
    console.log(error);
    throw new Error(error);
  }

  return reminders;
}

export async function addReminder({ name, priority }) {
  const { data: reminder, error } = await supabase
    .from("reminder")
    .insert([{ name, priority }])
    .select();

  if (error) {
    console.log(error);
    throw new Error(error);
  }

  return reminder;
}

export async function deleteReminder({ id }) {
  const { error } = await supabase.from("reminder").delete().eq("id", id);

  if (error) {
    console.log(error);
    throw new Error(error);
  }
}
