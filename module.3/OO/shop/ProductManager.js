/**
 * Static Method Use Case: Utility function for all products, managed by the Class itself.
 */
export class ProductManager {
  // 1. Static Method for Generating Unique IDs
  static generateSKU(productName) {
    // Use Case: A standardized way to create a SKU without needing a Product object
    const prefix = productName.substring(0, 3).toUpperCase();
    const randomNum = Math.floor(Math.random() * 1000);
    return `${prefix}-${randomNum}`;
  }

  // 2. Static Method for Tax Calculation
  static calculateTax(price, taxRate = 0.08) {
    // Use Case: Applying a universal business rule (tax)
    return price * taxRate;
  }
}
