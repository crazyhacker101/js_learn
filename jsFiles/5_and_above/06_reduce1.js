'use strict';

// Given is the numbers array, task is to sum the numbers;
let numbers = [1,2,3,4,5,6,7,8,9];

function imperativeSum(numbers) {
    let totalSum = 0;
    numbers.forEach(num => {
        totalSum += num;
    });
    return totalSum;
}

console.log(imperativeSum(numbers));

////////////////////////////////
// Container.reduce((answer, elementOfContainer) => {return ...},defaultanswerValue);

function functionalSum(numbers) {
    return numbers.reduce((total, num) => {return total += num}, 0);
}

console.log(functionalSum(numbers));

/////////////////////////////////////////
// Second example
// Given an array of strings, return a javascript plain object with key as the strings and value as the length of the strings.

let states = ["Kansas", "California", "North Dakota", "South Dakota"];

function imperativeLengths(states) {
    let lengthMap = {};
    states.forEach(state => {
        lengthMap[state] = state.length;
    });
    return lengthMap;
}
console.log(imperativeLengths(states));


function functionalLengths(states) {
    return states.reduce((lengthMap, state) => {
        lengthMap[state] = state.length;
        return lengthMap;
    }, {});
}

console.log(functionalLengths(states));

//////////////////////////////////////////
// exercise

// Using reduce, write a function that returns the product of all the elements in an array. Hint: Where += adds, *= multiplies.

let nums = [1,2,3,4,5];

function multiply(nums) {
    return nums.reduce((product, num) => {return product *= num}, 1);
}

console.log(multiply(nums));