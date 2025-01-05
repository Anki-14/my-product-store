// src/api/api.js
const API_URL = "https://fakestoreapi.com/products"; // Using Fake Store API

/**
 * Fetch all products from the API.
 * @returns {Promise<Array>} List of products
 */
export const fetchProducts = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Failed to fetch products");
    return await response.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

/**
 * Fetch product details by ID.
 * @param {number} productId - ID of the product
 * @returns {Promise<Object>} Product details
 */
export const fetchProductDetails = async (productId) => {
  try {
    const response = await fetch(`${API_URL}/${productId}`);
    if (!response.ok) throw new Error("Failed to fetch product details");
    return await response.json();
  } catch (error) {
    console.error("Error fetching product details:", error);
    return null;
  }
};
