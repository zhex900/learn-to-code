import { removeLastChar } from "./removeLastChar";
import { describe, it, expect } from "vitest";

describe("removeLastChar", () => {
  it("should remove the last character of a string", () => {
     expect(removeLastChar("Hello!")).toBe("Hello");
  });
   it("null should return null", () => {
     expect(removeLastChar(null)).toBe(null);
  }); 
   it("undefined should return undefined", () => {
     expect(removeLastChar(undefined)).toBe(undefined);
  }); 
   it("1.11 should return 1.111", () => {
     expect(removeLastChar(1.111)).toBe(1.111);
  }); 
   it("empty string should return undefined", () => {
     expect(removeLastChar("")).toBe("");
  }); 

});

