import { describe, it, expect } from "vitest";
import {
  sumArray,
  findSmallest,
  reverseString,
  reverseInteger,
  capitalizeWords,
  isPalindromeNumber,
} from "./functions-answers.js";

describe("functions-answers", () => {
  describe("sumArray", () => {
    it("sums numbers", () => {
      expect(sumArray([1, 2, 3])).toBe(6);
      expect(sumArray([-1, 1, 5])).toBe(5);
    });
    it("returns 0 for empty array", () => {
      expect(sumArray([])).toBe(0);
    });
  });

  describe("findSmallest", () => {
    it("finds the smallest number", () => {
      expect(findSmallest([3, 1, 4, 2])).toBe(1);
      expect(findSmallest([-5, -2, 0, 10])).toBe(-5);
    });
    it("returns undefined for empty array", () => {
      expect(findSmallest([])).toBeUndefined();
    });
  });

  describe("reverseString", () => {
    it("reverses strings", () => {
      expect(reverseString("abc")).toBe("cba");
      expect(reverseString("")).toBe("");
    });
  });

  describe("reverseInteger", () => {
    it("reverses positive integers", () => {
      expect(reverseInteger(1234)).toBe(4321);
      expect(reverseInteger(1200)).toBe(21);
    });
    it("reverses negative integers preserving sign", () => {
      expect(reverseInteger(-120)).toBe(-21);
    });
    it("handles zero", () => {
      expect(reverseInteger(0)).toBe(0);
    });
  });

  describe("capitalizeWords", () => {
    it("capitalizes first letter of each word", () => {
      expect(capitalizeWords("hello world")).toBe("Hello World");
      expect(capitalizeWords("hello  world")).toBe("Hello  World");
    });
    it("handles empty string", () => {
      expect(capitalizeWords("")).toBe("");
    });
  });

  describe("isPalindromeNumber", () => {
    it("detects palindrome numbers", () => {
      expect(isPalindromeNumber(121)).toBe(true);
      expect(isPalindromeNumber(0)).toBe(true);
      expect(isPalindromeNumber(1221)).toBe(true);
    });
    it("detects non-palindromes and negatives", () => {
      expect(isPalindromeNumber(10)).toBe(false);
      expect(isPalindromeNumber(-121)).toBe(false);
    });
  });
});
