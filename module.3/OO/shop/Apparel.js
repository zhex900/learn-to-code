/**
 * Inheritance Use Case: Extends the base product with specific attributes and logic.
 */
import { Product } from "./Product.js";
export class Apparel extends Product {
  constructor(sku, name, basePrice, size, color) {
    // Calls Product constructor to initialize sku, name, basePrice
    super(sku, name, basePrice);
    this.size = size;
    this.color = color;
  }

  // Method Overriding Use Case: A specialized behavior for apparel products
  displayPrice(isClearance = false) {
    if (isClearance) {
      const clearancePrice = this.basePrice * 0.7; // 30% off
      return `SALE: $${clearancePrice.toFixed(2)} (Original: $${this.basePrice.toFixed(2)})`;
    }
    // If not clearance, call the parent method
    return super.displayPrice();
  }

  // Specific Method Use Case: Behavior only relevant to Apparel
  getDetails() {
    return `${this.name} (${this.color}, Size ${this.size})`;
  }
}
