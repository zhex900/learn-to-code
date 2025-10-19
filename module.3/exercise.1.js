// sum of array
function sum(arr) {
  let result = 0;
  for (const item of arr) {
    console.log(typeof item);
    if (typeof item === "number") {
      result += item;
    }
    if (typeof item === "string") {
      const stringNumber = +item;
      console.log(typeof stringNumber, stringNumber);
    }
  }
  return result;
}

console.log(sum([1, 2, "1d"]));
