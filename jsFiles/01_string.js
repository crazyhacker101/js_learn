
// String concatenation
console.log("Saurabh" + " " + "Kumar");

// Using variables
let firstName = "Saurabh";
let lastName = "Kumar";

console.log(firstName + " " + lastName);

// using backtiks
// String Interpolation

let fullName = `${firstName} ${lastName}`;
console.log(fullName);

// Won't work as fullName is already declared
// let fullName = "Crazy";
// console.log(fullName);

// Assignment Questions
// What happens if I do it using var? --> It works. Redeclaration works
var isTime = true;
console.log(isTime);

var isTime = false;
console.log(isTime);


// Ques2
let city = "New Delhi";
let state = "Delhi";

console.log(`${city}, ${state}`);
console.log(`${city},\t${state}`);