'use strict';

// Use function keyword 
function greetUser(username) {
    if(username) {
        return `Hey ${username}, hope you are doing OK!`;
    } else {
        return `Hey Anonymous, set your username`;
    }
}

console.log(greetUser("Mr. X"));
console.log(greetUser(""));

///////////////////////////////////////////
// How to sort() numerical array

// Problem: 
let numbers = [8, 9, 27, 19, 15];

// Sorts alphabetically even if it is a number
numbers.sort();
console.log(numbers); 

// Solution
// This comparison is internal implementation of sort function, hover over sort() function to see definition

function compare(a, b) {
    if(a > b) {
        return 1;
    } else if(a < b) {
        return -1;
    } else {
        return 0;
    }
}

numbers.sort(compare);
console.log(numbers);

////////////////////////////////////////////
// Using fat arrow notation 
// Syntax : let function_name = (parameters) => {}

let greetMe = (firstName, lastName) => {
    if(firstName && lastName) {
        return `Hey ${firstName} ${lastName}`;
    } else {
        return `Hey Anonymous, set your full name.`;
    }
}

console.log(greetMe('Saurabh', 'Kumar'));
console.log(greetMe('Saurabh', ''));

//////////////////////////////////////////
// ASSIGNMENT
let getSquare = (num) => {
    return Math.pow(num, 2);
}

console.log(getSquare(8));