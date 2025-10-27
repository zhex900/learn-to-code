// api.js

import axios from "axios";

// 1. Define the base URL for the JSON Server
const BASE_URL = "http://localhost:2000";
// New header name for total count used by JSON Server
const TOTAL_COUNT_HEADER = "x-total-count";
/**
 * Centralized API service object.
 */
const api = {
  // =======================================================
  // PRODUCTS: Using async/await (Modern Promise Handling)
  // =======================================================

  /**
   * Retrieves a paginated list of products, optionally filtered by category.
   * @param {number} page - The page number to retrieve (starts at 1).
   * @param {number} limit - The number of items per page.
   * @param {string} [category] - Optional category to filter by.
   * @returns {Promise<Object>} A promise resolving to an object containing data and total count.
   */
  async getProducts(page = 1, limit = 10, category = "") {
    try {
      let url = `${BASE_URL}/products?_page=${page}&_limit=${limit}`;

      if (category) {
        url += `&category=${category}`;
      }

      const response = await axios.get(url);

      // JSON Server puts the total count in a custom HTTP header
      const totalCount = 6; //parseInt(response.headers[TOTAL_COUNT_HEADER], 10);

      console.log(
        `[API] Fetched page ${page} of products (Total items: ${totalCount}).`
      );

      return {
        products: response.data,
        totalItems: totalCount,
        totalPages: Math.ceil(totalCount / limit),
      };
    } catch (error) {
      console.error(
        `[API ERROR] Failed to fetch paginated products: ${error.message}`
      );
      throw error;
    }
  },

  /**
   * Retrieves a single product by ID.
   * @param {number} id - The ID of the product.
   * @returns {Promise<Object>} A promise that resolves with the product data.
   */
  async getProductById(id) {
    try {
      const response = await axios.get(`${BASE_URL}/products/${id}`);
      console.log(`[API] Fetched product ID ${id}.`);
      return response.data;
    } catch (error) {
      console.error(
        `[API ERROR] Failed to fetch product ${id}: ${error.message}`
      );
      throw error;
    }
  },

  // =======================================================
  // ORDERS: Using .then() chaining (Classic Promise Handling)
  // =======================================================

  /**
   * Creates a new order.
   * @param {Object} orderData - The order payload.
   * @returns {Promise<Object>} A promise that resolves with the created order object.
   */
  createOrder(orderData) {
    console.log("[API] Attempting to create new order...");

    // Returns the Promise chain
    return axios
      .post(`${BASE_URL}/orders`, orderData)
      .then((response) => {
        // Successful POST returns status 201 Created
        console.log(
          `[API] Order created successfully! ID: ${response.data.id}`
        );
        return response.data;
      })
      .catch((error) => {
        console.error(`[API ERROR] Failed to create order: ${error.message}`);
        throw error;
      });
  },

  // =======================================================
  // USERS: Static utilities
  // =======================================================

  /**
   * Retrieves all users.
   * @returns {Promise<Array>} A promise that resolves with the list of users.
   */
  getAllUsers() {
    return axios
      .get(`${BASE_URL}/users`)
      .then((response) => {
        console.log(`[API] Fetched ${response.data.length} users.`);
        return response.data;
      })
      .catch((error) => {
        console.error(`[API ERROR] Failed to fetch users: ${error.message}`);
        throw error;
      });
  },
};

export default api;
