'use strict';

// Split() method --> converting strings to an array
console.log("hey buddy".split(" "));
console.log("Cat, Bat, Rat".split(", "));

// Spliting a string into its components
console.log("badger".split(""));

// Excercises
let result = "A man, a plan, a canal, Panama".split(", ");
console.log(result.length);
console.log(result);
console.log(result.reverse());


///////////
// Arrays
let arr = ["badger", 123, null, "Are u or Are u not".includes("Are u")];
console.log(arr);
console.log(arr[1]);

// Excercises
let honeyBadger = "honey badger".split("");
for(let i = 0; i < honeyBadger.length; i++) {
    console.log(honeyBadger[i]);
}

console.log(!!undefined);