import axios from "axios";

// 1. Define the base URL for the JSON Server
const BASE_URL = "http://localhost:2000";

// index.js (Revised Loop)

import api from "./api.js";

const PAGE_LIMIT = 1; // Must be constant for consistent fetching

async function loopThroughAllPages(category = "") {
  let currentPage = 1;
  let totalPages = 1; // Start with 1 to ensure the loop runs at least once
  let allProducts = [];

  console.log(
    `\n--- Starting Full Product Dump (Limit: ${PAGE_LIMIT} per page) ---`
  );

  try {
    do {
      console.log(`\nFetching Page ${currentPage}...`);

      // Await the API call for the current page
      const result = await api.getProducts(currentPage, PAGE_LIMIT, category);

      // 1. Process and Collect Data from the current page
      result.products.forEach((p) => {
        console.log(`  [Page ${currentPage}] ID: ${p.id} - ${p.name}`);
        allProducts.push(p); // Collect all products into a single array
      });

      // 2. Update control variables for the next iteration
      totalPages = result.totalPages;
      currentPage++;

      // The loop continues as long as the current page number is less than or equal to the total pages
    } while (currentPage <= totalPages);

    console.log("\n--- FULL PRODUCT DUMP COMPLETE ---");
    console.log(
      `Successfully fetched a total of ${allProducts.length} products across ${totalPages} pages.`
    );
  } catch (e) {
    console.error(
      "\n❌ An error occurred during the pagination loop:",
      e.message
    );
  }
}

const main = async () => {
  const url = `${BASE_URL}/products?id=6`;
  const response = await axios.get(url);
  //   console.log(response);
  //   loopThroughAllPages();
};

main().then(() => {
  console.log("---");
});
