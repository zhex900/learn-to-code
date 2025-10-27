try {
  noSuchVariable;
} catch (error) {
  // error is just a variable name. 'error', 'err' or 'e' are all commonly used
  console.log("caught an error: " + error.message); // all errors have a message property
}
