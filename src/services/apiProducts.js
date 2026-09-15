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

export async function getProducts() {
  const { data: products, error } = await supabase.from("products").select("*");

  if (error) {
    console.log(error);
    throw new Error(error);
  }

  return products;
}

export async function updateProduct({ productId, updateData }) {
  const { data: updatedProduct, error } = await supabase
    .from("products")
    .update(updateData)
    .eq("id", Number(productId))
    .select();

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
