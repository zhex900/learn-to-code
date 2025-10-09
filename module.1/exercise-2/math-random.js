export function randomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export function randomBetween(min, max) {
  if (!Number.isInteger(min) || !Number.isInteger(max)) {
    throw new Error("Both min and max must be integers");
  }
  if (min > max) {
    throw new Error("min should not be greater than max");
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// random element from array
export function randomElement(array) {
  //
}
// random character from string
export function randomCharacter(string) {}
/**
 * Rolls a dice with the given number of sides
 * @param {number} sides - Number of faces on the dice
 * @returns {number} - Random integer between 1 and sides
 */
function rollDice(sides) {}
