import { ProductManager, Apparel, Product } from "./index.js";

const newProductSKU = ProductManager.generateSKU("Smartwatch");
const taxAmount = ProductManager.calculateTax(99.99);

console.log(`Generated SKU: ${newProductSKU}`);
// Output (example): Generated SKU: SMA-742

console.log(`Tax on $99.99 is: $${taxAmount.toFixed(2)}`);
// Output: Tax on $99.99 is: $8.00

const shirt = new Apparel("SHIRT045", "Cotton T-Shirt", 30.0, "L", "Navy");

console.log(shirt.getDetails());
// Output: Cotton T-Shirt (Navy, Size L)

console.log(`Regular Price: ${shirt.displayPrice()}`);
// Output: Regular Price: $30.00

console.log(`Clearance Price: ${shirt.displayPrice(true)}`);
// Output: Clearance Price: SALE: $21.00 (Original: $30.00)

const laptop = new Product("LAP001", "Gaming Laptop", 1200.0);

console.log(
  `Product(${laptop.getId()}): ${laptop.name} | Price: ${laptop.displayPrice()}`
);
// Output: Product: Gaming Laptop | Price: $1200.00
