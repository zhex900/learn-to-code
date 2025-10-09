import { removeLastChar } from "./removeLastChar";
import { describe, it, expect } from "vitest";

describe("removeLastChar", () => {
  it("should remove the last character of a string", () => {
    expect(removeLastChar("Hello!")).toBe("Hello");
  });

  it("null should return null", () => {
    expect(removeLastChar(null)).toBe(null);
    // expect(removeLastChar("1")).toBe("");
  });

  // undefined should return undefined
  // "" should return ""
  // "a" should return ""
  // 1.111 should return 1.111
  // no agument should return undefined
});
