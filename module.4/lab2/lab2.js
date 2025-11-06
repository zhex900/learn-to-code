// input is string
//  1+2
// return 2
// assuming only two numbers
// number operator number
function cal(input) {
  console.log({ input });
  // remove space
  // use operator as the divider
  // left of divier, right of divider
  const INVALID = "Invalid expression";
  const noSpace = input.replace(/ /g, "");
  const operators = ["*", "+", "-", "/"];

  // f(1) =>
  // find operator in input
  const operator = operators.find((operator) => noSpace.includes(operator));
  if (!operator) {
    return INVALID;
  }
  const expressionArray = noSpace.split(operator);
  // expecting array of three elements
  if (expressionArray.length !== 2) {
    return INVALID;
  }
  if (operator === "+") {
    return +expressionArray[0] + +expressionArray[1];
  }
  if (operator === "-") {
    return +expressionArray[0] - +expressionArray[1];
  }
  if (operator === "*") {
    return +expressionArray[0] * +expressionArray[1];
  }
  if (operator === "/") {
    return +expressionArray[0] / +expressionArray[1];
  }
  return INVALID;
}

console.log(cal("1+1")); //2
console.log(cal("2-2")); // 4
console.log(cal("2 /2")); //4
