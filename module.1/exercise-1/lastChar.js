function removeLastChar(str) {
  // input: abcde
  // output: abcd
  //   return str.slice(0, -1);
  //loop
  //   let newStr = "";
  //   for (let i = 0; i < str.length - 1; i++) {
  //     console.log(i, str[i], char);
  //     newStr += str[i] + char;
  //   }
  //   return newStr;
  // }
  return str.slice(0, -1);
}

const newValue = removeLastChar("abcd"); // "Hello!"

console.log(newValue); // "Hello!"
