// 1. Create and Access Arrays
function exercise1() {
  const fruits = ["apple", "banana", "cherry", "mango", "orange"];
  console.log("does it have mango?", fruits.includes("mango"));
  console.log("does it have pineapple?", fruits.includes("pineapple"));
  console.log("where is mango?", fruits.indexOf("mango"));
  console.log("last fruit?", fruits[fruits.length - 1]);
  console.log("first fruit?", fruits[0]);
  return {
    first: fruits[0],
    last: fruits[fruits.length - 1],
  };
}

// 2. Add / Remove Elements
function exercise2(fruits = ["apple", "banana", "cherry"]) {
  const newFruits = [...fruits]; // clone to avoid mutation
  newFruits.push("kiwi");
  newFruits.shift();
  return newFruits;
}

// 3. Slice and Splice
function exercise5(fruits = ["apple", "banana", "cherry", "mango"]) {
  const sliced = fruits.slice(0, 3);
  const spliced = [...fruits];
  spliced.splice(2, 1, "papaya");
  return { sliced, spliced };
}

// 4. Sort and Reverse
function exercise6(fruits = ["banana", "mango", "apple", "cherry"]) {
  const sorted = [...fruits].sort();
  const reversed = [...sorted].reverse();
  return { sorted, reversed };
}

// 5. Map and Transform
function exercise7(fruits = ["apple", "banana", "cherry"]) {
  const transformedFruits = [];
  for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
  }
  for (const fruit of fruits) {
    transformedFruits.push(fruit.toUpperCase());
  }
  return transformedFruits;
}

// 6. Nested Arrays
function exercise10(
  board = [
    ["X", "O", "X"],
    ["O", "X", "O"],
    ["O", "X", "X"],
  ]
) {
  return board[1][1]; // center element
}

// 7. add new element to the beginning of the array
export const addToBeginning = (arr, element) => {
  // or fruits.unshift("apple");
  return [element, ...arr];
};

// 8. add new element to the end of the array

export const addToEnd = (arr, element) => {
  return [...arr, element];
};

// tasks

// 1. give two arrays return the union of the two arrays
export const union = (arr1, arr2) => {
  //   return [...new Set([...arr1, ...arr2])];
};
