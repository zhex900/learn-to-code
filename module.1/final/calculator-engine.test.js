import { describe, it, expect } from "vitest";
import { Calculator } from "./calculator-engine";

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

  it("mixed operations: 12 / 3 * 4 - 2 + 5 = 19", () => {
    const c = new Calculator();
    c.inputDigit("1");
    c.inputDigit("2");
    c.setOperator("/");
    c.inputDigit("3");
    c.setOperator("*");
    c.inputDigit("4");
    c.setOperator("-");
    c.inputDigit("2");
    c.setOperator("+");
    c.inputDigit("5");
    c.evaluate();
    expect(c.getDisplay()).toBe("19");
  });

  it("decimal input: 1.5 + 2.5 = 4", () => {
    const c = new Calculator();
    c.inputDigit("1");
    c.inputDot();
    c.inputDigit("5");
    c.setOperator("+");
    c.inputDigit("2");
    c.inputDot();
    c.inputDigit("5");
    c.evaluate();
    expect(c.getDisplay()).toBe("4");
  });

  it("modulo: 7 % 4 = 3", () => {
    const c = new Calculator();
    c.inputDigit("7");
    c.setOperator("%");
    c.inputDigit("4");
    c.evaluate();
    expect(c.getDisplay()).toBe("3");
  });

  it("divide by zero shows Error then clears to 0", () => {
    const c = new Calculator();
    c.inputDigit("8");
    c.setOperator("/");
    c.inputDigit("0");
    c.evaluate();
    expect(c.getDisplay()).toBe("Error");
    c.clearAll();
    expect(c.getDisplay()).toBe("0");
  });

  it("setOperator keeps current display until next digit", () => {
    const c = new Calculator();
    c.inputDigit("1");
    c.inputDigit("2");
    c.setOperator("+");
    expect(c.getDisplay()).toBe("12");
    c.inputDigit("3");
    expect(c.getDisplay()).toBe("3");
  });

  it("after operator, display remains current decimal value", () => {
    const c = new Calculator();
    c.inputDigit("1");
    c.inputDot();
    c.inputDigit("5");
    c.setOperator("+");
    expect(c.getDisplay()).toBe("1.5");
  });

  it("deleteOne removes last digit and stops at 0", () => {
    const c = new Calculator();
    c.inputDigit("1");
    c.inputDigit("2");
    c.inputDigit("3");
    c.deleteOne();
    expect(c.getDisplay()).toBe("12");
    c.deleteOne();
    c.deleteOne();
    expect(c.getDisplay()).toBe("0");
  });

  it("after evaluate, typing a digit starts a new number", () => {
    const c = new Calculator();
    c.inputDigit("2");
    c.setOperator("+");
    c.inputDigit("3");
    c.evaluate();
    expect(c.getDisplay()).toBe("5");
    c.inputDigit("4");
    expect(c.getDisplay()).toBe("4");
  });
});
