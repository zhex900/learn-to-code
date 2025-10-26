/**
 * HOF: createDiscountApplier
 * Takes a rate and returns a specialized discount function (the closure).
 * @param {number} discountRate - The decimal rate (e.g., 0.10).
 */
function createDiscountApplier(discountRate) {
  // CLOSURE: The returned function remembers the 'discountRate'.
}

// ----------------------------------------------------------------------
// Usage: Create Specialized Discount Functions

const applyTenOff = createDiscountApplier(0.1); // 10% off
const applyQuarterOff = createDiscountApplier(0.25); // 25% off

const originalPrice = 100.0;

console.log("\n--- Discount Closure Example ---");
console.log(`Original Price: $${originalPrice.toFixed(2)}`);
console.log(`Price with 10% off: $${applyTenOff(originalPrice).toFixed(2)}`); // $90.00
console.log(
  `Price with 25% off: $${applyQuarterOff(originalPrice).toFixed(2)}`
); // $75.00

/**
 * HOF: createTaxCalculator returns a specialized function (the closure).
 */
// function createTaxCalculator(rate) {}

// // 1. Specialized Function Creation
// const calculateVAT = createTaxCalculator(0.2); // 20% tax
// const calculateGST = createTaxCalculator(0.05); // 5% tax

// console.log("--- Tax Factory Example ---");
// console.log(`VAT on $100: $${calculateVAT(100).toFixed(2)}`); // $120.00
// console.log(`GST on $100: $${calculateGST(100).toFixed(2)}`); // $105.00

/*
 *
 *
 **
 *
 *
 *
 *
 **
 *
 **
 *
 **
 *
 **
 *
 **
 *
 **
 *
 **
 *
 **
 *
 **
 *
 **
 *
 *
 *
 *
 *
 */

/**
 * HOF: createDiscountApplier
 * Takes a rate and returns a specialized discount function (the closure).
 * @param {number} discountRate - The decimal rate (e.g., 0.10).
 */
// function createDiscountApplier(discountRate) {
//   // CLOSURE: The returned function remembers the 'discountRate'.
//   return function (price) {
//     return price * (1 - discountRate);
//   };
// }

// function createTaxCalculator(rate) {
//     // The inner function closes over and remembers 'rate'.
//     return function(price) {
//         return price * (1 + rate);
//     };
// }
