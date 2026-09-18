import supabase from "./supabase";

export async function getSales() {
  let query = supabase
    .from("sales")
    .select(
      "productId (name, model, category, unit_price), total_price, quantity, remark, isPaid",
    );

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
