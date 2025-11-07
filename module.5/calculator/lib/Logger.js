export class Logger {
  constructor(id) {
    this.id = id;
  }
  log = (...args) => {
    console.log(this.id, ...args);
  };
}
