import { Logger } from "./Logger.js";

export class Calculator {
  constructor() {
    this.id = Math.floor(Math.random() * 1000);
    this.logger = new Logger(this.id);
  }

  add(num1, num2) {
    this.logger.log("add", num1, num2); // public method calling private method
    const value = num1 + num2;
    return value;
  }
  minus(a, b) {
    this.logger.log();
    return a - b;
  }
}
