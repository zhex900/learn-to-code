//// .apply

const reporter = {
  appName: "DataProcessor",

  log_success: function (code, message) {
    // 'this' refers to the reporter object
    console.log(`[${this.appName} SUCCESS ${code}] ${message}`);
  },

  log_error: function (code, message, detail) {
    // 'this' refers to the reporter object
    console.log(
      `[${this.appName} ERROR ${code}] ${message} -> Details: ${detail}`
    );
  },
};

const httpStatus = "success"; // Could be 'success' or 'error'
const messageData = [
  500, // code
  "File access failed", // message
  "Server is offline", // detail
];

// Determine which method to call dynamically
const methodToCall = reporter[`log_${httpStatus}`];
// This resolves to reporter['logError']

if (methodToCall) {
  // We use .apply() to:
  // 1. Set 'this' to the 'reporter' object, so the logging methods can access this.appName.
  // 2. Pass the messageData array as individual arguments.
  methodToCall.apply(reporter, messageData);
}

// Output: [DataProcessor ERROR 500] File access failed -> Details: Server is offline

// 1. Utility function to join parts into a complete URL string
// This function expects 'this' to be the array of URL parts.
function buildURL(separator) {}

// 2. Logger function: Expects arguments as array of data points to log
function logger(type, message, ...data) {}

// 1. Data Segments
const urlSegments = ["https://api", "v1", "users", "report.json"];

// 2. Build URL using .apply()
// We borrow buildURL, setting 'this' to urlSegments and passing the separator '/'
const finalURL = buildURL.apply(urlSegments, ["/"]);
console.log("\n--- Step 2 Result ---");
console.log(finalURL);

// 3. Log Result using .apply()
// Arguments for logger: ['STATUS', 'URL Created', finalURL]
const logArguments = ["STATUS", "URL Created", finalURL];

// We use .apply() to execute the logger. 'this' is null/undefined.
// We pass the logArguments array directly to logger.
console.log("\n--- Step 3 Log ---");
logger.apply(null, logArguments);
/*
Expected Output:
[STATUS] URL Created:
 - https://api/v1/users/report.json
*/
//
//
////
////
////
////
////
////
////
//
//
//
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
////
//
// function buildURL(separator) {
//   // Borrow Array.prototype.join to concatenate the parts in 'this'
//   return Array.prototype.join.call(this, separator);
// }

// // 2. Logger function: Expects arguments as array of data points to log
// function logger(type, message, ...data) {
//   console.log(`[${type.toUpperCase()}] ${message}:`);

//   // We borrow Array.prototype.forEach to cleanly display the data array
//   // Here, 'this' (the Logger object) is null/undefined, but we use .apply()
//   // to execute the borrowed function on the 'data' array.
//   Array.prototype.forEach.apply(data, [
//     (item) => {
//       console.log(` - ${item}`);
//     },
//   ]);
// }
