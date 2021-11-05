'use strict';

console.log(Math.PI);
// But in fact JavaScript has only one numerical type, and even something like 1 or 2 is treated as floating point under the hood.
console.log(10/5, 10/3);
console.log(Math.pow(2, 3));
console.log(Math.sqrt(2));

// Natural log 
console.log(Math.log(Math.E));
// base 10
console.log(Math.log10(10));

// .toString() function on Numbers
let tau = 2 * Math.PI;
console.log(tau.toString());
console.log(String(tau));

//Strange JAVASCRIPT
// console.log(100.toString());    // Won't Work
console.log(100.0.toString());  // But this will

// String to Numbers
console.log(Number('100'));
console.log(Number('100.0'));
console.log(Number('Not a number'));

// Scientific Numbers
console.log(1.36e6);
console.log(Math.log10(1e6));

// EXERCISES
// What is the JavaScript value of the square root of −1? By guessing or Googling, figure out what this value stands for. What is its boolean value?
let imaginaryNumber = Math.sqrt(-1);
console.log(imaginaryNumber, `Boolean Value: ${!!imaginaryNumber}`)