'use strict';

let numbers = [27, 10, 48, 36, 14];

// Slice method
console.log(numbers.slice(1));
console.log(numbers.slice(1, 3));

// sliceing -1 index
console.log(numbers.slice(-1));

// Get the last element
console.log(numbers.slice(-1)[0]);

// reverse()
console.log(numbers);
numbers.reverse();
console.log(numbers);

// Meaning slice() is not in-place while reverse() is in-place

//Exxercises
// Define an array with the numbers 1 through 10. Use slicing and length to select the third element through the third-to-last. Accomplish the same task using a negative index.

let arr = [];
for(let i = 1; i <= 10; i++){
    arr.push(i);
}

console.log(arr);
console.log(arr.slice(2, -2));
console.log(arr.slice(2, arr.length - 2));

// Show that strings also support the slice method by selecting just bat from the string "ant bat cat". (You might have to experiment a little to get the indices just right.)

let string = "ant bat cat";
console.log(string.slice(4, 7));
console.log(string.slice(4, -4));
console.log(string.slice(4, string.length - 4));