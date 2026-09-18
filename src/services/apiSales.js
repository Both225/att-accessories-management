import supabase from "./supabase";

export async function getSales({ isPaid, isPaidRaw }) {
  let query = supabase
    .from("sales")
    .select(
      "id, productId (name, model, category, unit_price), total_price, quantity, remark, isPaid, created_at",
    );

  if (isPaid === true || (isPaid === false && isPaidRaw !== "all")) {
    query = query.eq("isPaid", isPaid);
  }

  const { data: sales, error } = await query;

  if (error) {
    console.log(error);
    throw new Error("Can't get sales product");
  }

  return sales;
}

export async function getSale({ productId }) {
  let query = supabase
    .from("sales")
    .select(
      "product (name, model, category, unit_price), total_price, quantity, remark, isPaid",
    )
    .eq("productId", productId);

  const { data: sale, error } = await query;

  if (error) {
    console.log(error);
    throw new Error("Can't get sale product");
  }

  return sale;
}

export async function addSale(sale) {
  const { data, error } = await supabase.from("sales").insert([sale]).select();

  if (error) {
    console.log(error);
    throw new Error("Can't add sale");
  }

  return data;
}

export async function fetchSalesByDate({ selectedDateStr }) {
  const startOfDay = `${selectedDateStr}T00:00:00.000Z`;
  const endOfDay = `${selectedDateStr}T23:59:59.999Z`;

  const { data, error } = await supabase
    .from("sales")
    .select()
    .gte("created_at", startOfDay)
    .lte("created_at", endOfDay);

  if (error) {
    console.log(error);
    throw new Error("can't not fetch data by date");
  }

  return data;
}
