// index.js

import api from "./api.js";

async function runApp() {
  console.log("Application starting...");

  // 1. ASYNC/AWAIT EXAMPLE (Get Products)
  try {
    const electronics = await api.getProducts("Electronics");
    console.log("\n--- 1. ELECTRONICS PRODUCTS ---");
    electronics.forEach((p) => console.log(`ID: ${p.id} | ${p.name}`));
  } catch (e) {
    console.log("Could not load electronics data.");
  }

  // 2. .THEN() CHAINING EXAMPLE (Create Order)
  const newOrderPayload = {
    items: [{ productId: 4, quantity: 1 }],
    total: 399.0,
    customerId: 101,
    status: "New",
  };

  api
    .createOrder(newOrderPayload)
    .then((order) => {
      console.log("\n--- 2. NEW ORDER CREATED ---");
      console.log(`Order Total: $${order.total}`);
    })
    .catch((error) => {
      console.log("Failed to process order creation.");
    });

  // The synchronous run continues while the Promise above is pending
  console.log("\nMain application thread running non-blocking operations...");
}

runApp();
