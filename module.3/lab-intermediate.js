function truncateString(str, max) {
  const stringArray = str.split("");
  let result = "";
  if (str.length < max) {
    return str;
  }
  for (let i = 0; i < max; i++) {
    const char = stringArray[i];
    // console.log(char);
    result += char;
  }
  return result + "...";
}

// ab...
// console.log(truncateString("abcde", 20));

// abc abc -> Abc Abc
function sentanceCase