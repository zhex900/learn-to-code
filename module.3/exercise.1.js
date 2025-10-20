// sum of array
//

// function sum(arr) {
//   return `🤚${asum(arr)}🚀`;
// }

const iteratorFunction = (arr, filterFunction) => {
  let result = [];

  for (const item of arr) {
    if (filterFunction(item)) {
      result.push(item);
    }
  }

  return result;
};

function minFilter(item) {
  return item < 3;
}

function maxFilter(item) {
  return item > 3;
}
console.log(
  iteratorFunction(
    // arg 1
    [1, 2, 3, 4, 5, 6],
    // arg 2
    (a) => typeof a === "number"
  )
);

// given 4, [1,2,3]
// given 5, [1,2,3,4]
// given 0 []
