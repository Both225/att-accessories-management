import { PAGE_SIZE } from "../utils/contains";
import supabase from "./supabase";

export async function addProduct(newProduct) {
  const { data: product, error } = await supabase
    .from("products")
    .insert([newProduct])
    .select();

  if (error) {
    console.log(error);
    throw new Error(error);
  }

  return product;
}

export async function getProducts({ page }) {
  let query = supabase.from("products").select("*", { count: "exact" });

  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = page * PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  const { data: products, error, count } = await query;

  if (error) {
    console.log(error);
    throw new Error(error);
  }

  return { products, count };
}

export async function updateProduct({ productId, updateData }) {
  const { data: updatedProduct, error } = await supabase
    .from("products")
    .update(updateData)
    .eq("id", Number(productId))
    .select()
    .single();

  if (error) {
    console.log(error);
    throw new Error(error);
  }

  return updatedProduct;
}

export async function deleteProduct({ productId }) {
  const { error } = await supabase
    .from("products")
    .delete()
    .eq("id", productId);

  if (error) {
    console.log(error);
    throw new Error(error);
  }
}
