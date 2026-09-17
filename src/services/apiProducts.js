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

export async function getProducts({ page, category, model, sortBy, name }) {
  let query = supabase
    .from("products")
    .select("id, name, unit_price, image, category, stock_quantity, model", {
      count: "exact",
    });

  // Filter by model
  if (model && model !== "all") {
    query = query.ilike("model", `${model}%`);
  }

  // Filter by category
  if (category && category !== "all") {
    query = query.eq("category", category);
  }

  // SortBy
  if (sortBy && sortBy !== "all")
    query = query.order(sortBy.field, {
      ascending: sortBy.direction === "asc",
    });

  // Pagination
  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = page * PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  if (name) {
    query = query.ilike("name", `%${name.trim()}%`);
  }

  const { data: products, error, count } = await query;

  if (error) {
    console.log(error);
    throw new Error(error);
  }

  if (!category) return { products, count };

  return { products, count };
}

export async function getProduct({ name }) {
  const { data: product, error } = await supabase
    .from("products")
    .eq("name", name)
    .select()
    .single();

  if (error) {
    console.log(error);
    throw new Error(error);
  }

  return product;
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
