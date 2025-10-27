function sum(arrayOfNumbers) {
  // imperative progamming

  let total = 0;
  for (const item of arrayOfNumbers) {
    total += item;
  }
  return total;
}

function sumArray(arrayOfNumbers, index = 0) {
  // stopping condition
  if (index >= arrayOfNumbers.length) {
    return 0;
  }
  return arrayOfNumbers[index] + sumArray(arrayOfNumbers, index + 1);
}

const testArray = [1, 2, 3, 4];
const total = sum(testArray);

const total2 = sumArray(testArray);

console.log({ total, total2 });
