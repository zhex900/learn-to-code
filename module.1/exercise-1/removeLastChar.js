//remove the last character of a string using a loop

let str = "Hello!";
let newStr = "";

for (let i = 0; i < str.length - 1; i++) {
  newStr += str[i];
}

console.log(str.slice(0, -1)); // "Hello"
console.log(str.substring(0, str.length - 1)); // "Hello"

console.log(newStr); // "Hello"

//implement removeLastChar
export function removeLastChar(str) {
  let newStr = "";
  // !==
  if (typeof str !== "string") {
    return str;
  }
  for (let i = 0; i < str.length - 1; i++) {
    newStr += str[i];
  }
  return newStr;
}

console.log("-", removeLastChar("abcd")); // "abc"
// abc -> ab
// abcd -> abc
// null -> null
// "" -> ""
