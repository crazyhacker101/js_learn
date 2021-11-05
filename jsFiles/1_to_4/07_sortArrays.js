'use strict';

let numbers = [65, 24, 19, 8, 9, 87, 45];
console.log(numbers.includes(24), numbers.includes('24'));

// sort() method --> in place
// JavaScript has sorted the elements of the array not according to their numerical values, but rather “alphabetically”

numbers.sort();
console.log(numbers);

// Reverse method -> in place
numbers.reverse();
console.log(numbers);

// push() at end
numbers.push('fool');
console.log(numbers);

// pop() from end
numbers.pop();
console.log(numbers);

// Split and join

let result = ["ant", "bat", "rat", 45, true];
console.log(result.join(" "));
console.log(result.join(", "));
console.log(result.join(" -- "));

// Amazing thing happens when u convert back to array
console.log(result);
console.log(result.join(" ").split(" "));

// Push an element in front of the array
let nums = [1,2,3,4];
nums.unshift(5);
console.log(nums);
nums.unshift(6, 7);
console.log(nums);

// Pop form front 
nums.shift();
console.log(nums);

// Array iteration
for(let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
}

// Excercise
let newArr = ["cat", "rat", "bat", 42];
let total = "";
for(let i = 0; i < newArr.length; i++) {
    total += newArr[i];
}

console.log(total === newArr.join(""));