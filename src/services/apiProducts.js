import supabase from "./supabase";

export async function getProducts() {
  const { data: products, error } = await supabase.from("products").select("*");

  if (error) {
    console.log(error);
    throw new Error(error);
  }

  return products;
}
