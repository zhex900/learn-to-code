//
// 1. given an array of integers return the sum
// if array is empty return 0
export function sumArray(arr) {
  // use loop
  if (arr.length === 0) return 0; // handle empty array safely
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
  // or use built-in methods
  //
  //   return arr.reduce((acc, curr) => acc + curr, 0);
}

console.log(sumArray([1, 2])); // 0
// given an array of integers return the smallest integer
// if array is empty return undefined
export function findSmallest(numbers) {
  if (numbers.length === 0) return undefined; // handle empty array safely

  let smallest = numbers[0];

  for (let num of numbers) {
    if (num < smallest) smallest = num;
  }

  return smallest;
}

// 3. given an string return the string reversed
export function reverseString(str) {
  // use loop
  let reversed = "";
  for (let char of str) {
    reversed = char + reversed;
  }
  return reversed;
  // or use built-in methods
  //   return str.split("").reverse().join("");
}
// 4. given an integer return the integer reversed
// for example, 1234 should return 4321
export function reverseInteger(num) {
  // use toString
  const isNegative = num < 0;
  let str = Math.abs(num).toString();
  let reversedStr = "";
  for (let char of str) {
    reversedStr = char + reversedStr;
  }
  const reversedNum = parseInt(reversedStr, 10);
  return isNegative ? -reversedNum : reversedNum;
  //     // or use built-in methods
  //   const reversed = parseInt(num.toString().split("").reverse().join(""), 10);
  //   return Math.sign(num) === -1 ? -reversed : reversed;
}

// 5. given a string return the string with the first letter of each word capitalized
// for example, "hello world" should return "Hello World"
export function capitalizeWords(str) {
  // use loop
  if (str.length === 0) return str; // handle empty string
  let capitalized = "";
  let capitalizeNext = true;

  for (let char of str) {
    if (char === " ") {
      capitalized += char;
      capitalizeNext = true;
    } else if (capitalizeNext) {
      capitalized += char.toUpperCase();
      capitalizeNext = false;
    } else {
      capitalized += char;
    }
  }
  return capitalized;
  // or use built-in methods
  //   return str
  //     .split(" ")
  //     .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  //     .join(" ");
}

// 6. Palindrome Number
export function isPalindromeNumber(x) {
  if (x < 0) return false; // negative numbers are not palindromes
  const str = x.toString();
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}
// Given an integer x, return true if x is a palindrome, and false otherwise.
// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

// bonus write unit tests for each function
