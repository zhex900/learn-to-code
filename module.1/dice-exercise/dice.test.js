// rollDice.test.js
import { rollDice } from "./dice"; // assume function is exported from rollDice.js
import { describe, it, expect } from "vitest";

describe("rollDice", () => {
  it("returns a number between 1 and the given sides", () => {
    const sides = 6;
    for (let i = 0; i < 100; i++) {
      const result = rollDice(sides);
      expect(result).toBeGreaterThanOrEqual(1);
      expect(result).toBeLessThanOrEqual(sides);
    }
  });

  it("works with a single-sided dice", () => {
    expect(rollDice(1)).toBe(1);
  });

  it("throws an error if sides is less than 1", () => {
    expect(() => rollDice(0)).toThrow("Sides must be a positive integer");
    expect(() => rollDice(-5)).toThrow("Sides must be a positive integer");
  });

  it("throws an error if sides is not an integer", () => {
    expect(() => rollDice(6.5)).toThrow("Sides must be a positive integer");
    expect(() => rollDice("6")).toThrow("Sides must be a positive integer");
  });
});
