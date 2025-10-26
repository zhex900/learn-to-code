const counter = {
  count: 0,
  increment: function () {
    this.count++;
  },
};
// In JavaScript, the value of the keyword this is not fixed by where the function is defined;
//  it's determined by where the function is executed.
// When a method is detached from its parent object (i.e., passed as a callback), it loses its explicit context:
const clickHandler = counter.increment; //this is lost, in the reference
counter.increment();
counter.increment();
// const boundHandler = counter.increment.bind(counter); // creates a new function
// clickHandler();
console.log(counter.count);

// // 1. .bind() returns a new function (it does not execute immediately).
// // const boundHandler = counter.increment.bind(counter);

// // When executed directly, 'this' defaults to the global object (or is undefined).
// // It does NOT increment counter.count.
// clickHandler();

// // The object containing the utility method we want to borrow and bind.
// const systemLogger = {
//   systemName: "APP_CORE",

//   // This method expects 'this' to be the systemLogger object.
//   // It takes 'level' and 'message' as arguments.
//   log: function (level, message) {
//     const timestamp = new Date().toLocaleTimeString();
//     console.log(`[${this.systemName} | ${level}] (${timestamp}): ${message}`);
//   },
// };
// /**
//  * HOF: createContextualLogger
//  * Creates a specialized logging function with 'this' and the 'level' permanently set.
//  * * @param {object} contextObject - The object to set as 'this' (e.g., systemLogger).
//  * @param {string} defaultLevel - The default log level to pre-set (e.g., 'WARNING').
//  * @returns {Function} A new function bound to the context and level.
//  */
// function createContextualLogger(contextObject, defaultLevel) {
//   // We use .bind() on the original method (systemLogger.log)
//   // 1. The first argument (contextObject) sets 'this' permanently.
//   // 2. The second argument (defaultLevel) permanently sets the first argument of the log function (level).
//   return systemLogger.log.bind(contextObject, defaultLevel);
// }

// // A. Create a specialized, bound logger for errors
// const logError = createContextualLogger(systemLogger, "ERROR");

// // B. Create a specialized, bound logger for warnings
// const logWarning = createContextualLogger(systemLogger, "WARNING");

// console.log("--- Executing Bound Functions ---");

// // We call the new function later, only passing the message.
// // The context (systemLogger) and level ('ERROR') are already locked in.
// logError("Database connection dropped unexpectedly.");

// // The context (systemLogger) and level ('WARNING') are locked in.
// logWarning("API response time exceeded 500ms threshold.");

// // If you try to change the context or level, it will be ignored:
// logError.call({ systemName: "HACKER" }, "INFO", "This is ignored");
// // The output will still show [APP_CORE | ERROR]
