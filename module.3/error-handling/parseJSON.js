///

function safeParseJSON(str) {
  return JSON.parse(str);
}

console.log(safeParseJSON("2,"));
