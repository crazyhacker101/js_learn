'use strict';

let firstName = "Saurabh";
let username = firstName.toLowerCase();
let emailId = `${username}@example.com`;
let profileName = firstName.toUpperCase();

console.log(firstName, username, emailId, profileName);

////////////////////////

// Write the JavaScript code to test whether the string “hoNeY BaDGer” includes the string “badger” without regard to case.

let testString = "hoNeY BaDGer";
let key = "badger";

console.log(testString.toLowerCase().includes(key.toLowerCase(), 1));

//////////////////////
// Looping
let randomQuote = "To be, or not to be, that is the question:";
let result = '';
for(let i = 0; i < randomQuote.length; i++) {
    result += randomQuote.charAt(i);    // or randomQuote[i]
}
console.log(result);