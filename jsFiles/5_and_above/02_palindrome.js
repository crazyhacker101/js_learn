'use strict';

// Since there is no method to reverse string we need to write our custom reverse function

function reverseString(userInput) {
    return userInput.split('').reverse().join('');
}

let isPalindrome = (userInput) => {
    let processedInput = userInput.toLowerCase();
    return processedInput === reverseString(processedInput);
}

console.log(isPalindrome('racecar'), isPalindrome('saurabh'), isPalindrome('Racecar'));

////////////////////////////////
// This reverse function won't work properly if there is an emoji in the string. The reason for this is that each emoji is effectively represented as two separate characters, and splitting on the empty string as in Listing 5.10 splits each emoji in half (ouch!). The solution is to create an array from a string a different way, using a custom array method called Array.from():

let str = "This 😂 is a 😅 emoji";

// Problem:
console.log(reverseString(str));

// Solution:
function refinedReverse(userInput) {
    return Array.from(userInput).reverse().join('');
}
console.log(refinedReverse(str));


///////////////////////////////////////////
// ASSIGNMENT
// Using method chaining, write a function emailParts to return an array of the username and domain for a standard email address of the form username@example.com. Note: Make sure your function returns the same result for USERNAME@EXAMPLE.COM.

let emailParts = (emailId) => {
    return emailId.toLowerCase().split('@');
}

console.log(emailParts("username@example.com"), emailParts("USERNAME@EXAMPLE.COM"));