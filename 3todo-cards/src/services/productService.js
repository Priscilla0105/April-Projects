// src/services/productService.js

export const getProducts = async () => {
  try {
    const res = await fetch("/products.json");
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Error:", error);
    return [];
  }
};