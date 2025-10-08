export class Calculator {
  constructor() {
    this.current = "0";
    this.previous = null;
    this.operator = null;
    this.justEvaluated = false;
  }

  getDisplay() {
    return this.current;
  }

  inputDigit(d) {
    console.log("inputDigit", d, this.operator, this.current);
    if (this.justEvaluated) {
      this.current = d;
      this.justEvaluated = false;
      return;
    }
    if (this.current === "0") this.current = d;
    else this.current += d;
  }

  inputDot() {
    if (this.justEvaluated) {
      this.current = "0.";
      this.justEvaluated = false;
      return;
    }
    if (!this.current.includes(".")) {
      this.current += ".";
    }
  }

  clearAll() {
    this.current = "0";
    this.previous = null;
    this.operator = null;
    this.justEvaluated = false;
  }

  deleteOne() {
    if (this.justEvaluated) {
      this.clearAll();
      return;
    }
    if (this.current.length <= 1) this.current = "0";
    else this.current = this.current.slice(0, -1);
  }

  setOperator(op) {
    if (this.operator && !this.justEvaluated) {
      // chain operation
      this.evaluate();
    }
    this.previous = parseFloat(this.current);
    this.operator = op;
    this.justEvaluated = false;
    this.current = "0";
  }

  evaluate() {
    if (this.operator === null || this.previous === null) return;
    const a = this.previous;
    const b = parseFloat(this.current);
    let result;
    switch (this.operator) {
      case "+":
        result = a + b;
        break;
      case "-":
        result = a - b;
        break;
      case "*":
        result = a * b;
        break;
      case "/":
        result = b === 0 ? "Error" : a / b;
        break;
      case "%":
        result = a % b;
        break;
      default:
        return;
    }
    this.current = String(result);
    this.operator = null;
    this.previous = null;
    this.justEvaluated = true;
  }
}
