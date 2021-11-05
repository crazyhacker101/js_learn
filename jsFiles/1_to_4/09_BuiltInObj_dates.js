'use strict';

let currDate = new Date();
console.log(currDate);
let thatDate = new Date('December 17, 1995 03:24:00');
console.log(thatDate);

let birthDate = new Date('June 15, 2000');
console.log(birthDate);
console.log(currDate - birthDate);
console.log(currDate.getFullYear());
console.log(currDate.getMonth());      // Returns month Index
console.log(currDate.getDay());    // Returns the index of curr day --> starting from 0 - Sunday, 1 - Monday ....

// ASSIGNMENT
// Create a new Date object by passing it a string for your birthday (including year). JavaScript supports a number of different formats, so it will probably work with whichever date format you prefer. Pretty cool, no?

let date1 = new Date('June 18, 2001');
console.log(date1, date1.getDate());

let moonLanding = new Date("July 20, 1969 20:18");
console.log(`Miliseconds btw MoonLAnding and my Birthday: ${date1 - moonLanding}`);
