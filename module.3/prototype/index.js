// 1. Basic Constructor and Instance Prototype 🏗️
function Car(make, model) {
  this.make = make;
  this.model = model;
  // Data properties are defined on the instance itself
}

// Method is defined on the prototype, so all Car instances share the same function object.
Car.prototype.getDetails = function () {
  return `This is a ${this.make} ${this.model}.`;
};

const car1 = new Car("Honda", "Civic");
const car2 = new Car("Toyota", "Corolla");

console.log(car1.getDetails()); // This is a Honda Civic.
// Check if the method is directly on the instance (it isn't)
console.log(car1.hasOwnProperty("getDetails")); // false
// Check that the method object is shared (it is)
console.log(car1.getDetails === car2.getDetails); // true

// 2. Prototypal Inheritance (The Chain) 🔗
// Parent Constructor
// function Animal(name) {
//   this.name = name;
// }
// Animal.prototype.speak = function () {
//   return `${this.name} makes a sound.`;
// };

// Child Constructor: Inherits from Animal
// function Dog(name, breed) {
//   Animal.call(this, name); // Call Animal constructor to inherit properties
//   this.breed = breed;
// }

// // Set up the prototype chain: Dog's prototype inherits from Animal's prototype
// Dog.prototype = Object.create(Animal.prototype);
// // Reset the constructor property (good practice)
// Dog.prototype.constructor = Dog;

// // Add a new method specific to Dog
// Dog.prototype.fetch = function () {
//   return `${this.name} is fetching!`;
// };

// const myDog = new Dog("Buddy", "Labrador");

// // Access method from Dog's prototype
// console.log(myDog.fetch()); // Buddy is fetching!
// Access method from Animal's prototype (traversing the chain)
// console.log(myDog.speak()); // Buddy makes a sound.

// 3. Extending Built-in Objects (Array) 🧩

// Add a custom method to the Array prototype to get the sum of all elements.
Array.prototype.getSum = function () {
  return this.reduce((acc, num) => acc + num, 0);
};

const prices = [10, 20, 50];

// All arrays now have the getSum method
console.log(prices.getSum()); // 80

const points = [1, 2, 3];
console.log(points.getSum()); // 6

// Array deep clone
// Array multiplyBy
//  implement use functional and Imperative Loop

// isEven
// isOdd
