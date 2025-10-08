import { describe, it, expect } from "vitest";
import { Calculator } from "./calculator";

describe("Calculator (engine)", () => {
  it("starts with display 0", () => {
    const c = new Calculator();
    expect(c.getDisplay()).toBe("0");
  });

  it("basic addition 1 + 2 = 3", () => {
    const c = new Calculator();
    c.inputDigit("1");
    c.setOperator("+");
    c.inputDigit("2");
    c.evaluate();
    expect(c.getDisplay()).toBe("3");
  });
});
