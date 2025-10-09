/**
 * Rolls a dice with the given number of sides.
 * @param {number} sides - Number of faces on the dice.
 * @returns {number} - Random integer between 1 and sides (inclusive).
 */
export function rollDice(sides) {
  if (sides < 1 || !Number.isInteger(sides)) {
    throw new Error("Sides must be a positive integer");
  }

  let randomNumber = 1;

  // 📌 Generate random number between 1 and sides

  return randomNumber;
}

// Example usage
console.log(rollDice(6)); // random number 1-6
console.log(rollDice(20)); // random number 1-20
