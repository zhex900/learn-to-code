/**
 * Class Use Case: Defines the fundamental structure of an item for sale.
 */
export class Product {
  #id;
  constructor(sku, name, basePrice) {
    this.sku = sku; // Stock Keeping Unit (Unique ID)
    this.name = name;
    this.basePrice = basePrice;
    this.inStock = true; // Default state
    this.#id = this.#generateId();
  }
  #generateId() {
    return Math.floor(Math.random() * 10000);
  }
  getId() {
    return this.#id;
  }
  // Method Use Case: A standard behavior for all products
  displayPrice() {
    return `$${this.basePrice.toFixed(2)}`;
  }

  // Method Use Case: Checking and updating inventory state
  toggleStock(isAvailable) {
    this.inStock = isAvailable;
    console.log(
      `${this.name} stock status updated to: ${this.inStock ? "Available" : "Out of Stock"}.`
    );
  }
}
