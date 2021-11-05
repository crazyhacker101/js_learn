'use strict';

let numbers = [8, 42, 19, 10, 9];

//Iterate using foreach loop: Need a callback function
// Here we have passed an anonymous function

numbers.forEach(function (element) {
    console.log(element);
});

let biodata = 'This is going to be an epic year.';

Array.from(biodata).forEach((character) => {
    console.log(character);
});


//////////////////////////
// Smart sorting
// We saw in Listing 5.1 how to define a number comparison function that let us sort JavaScript arrays numerically. There we used return values of 1, -1, and 0, but it turns out sort only cares about the sign of the comparison, so 17 is the same as 1, -42 is the same as -1, etc. For numbers a and b, the value a - b has the right sign, so show that the code in Listing 5.17, which uses an anonymous function, correctly sorts the array.

numbers = [8, 42, 19, 10, 9];
numbers.sort(function (a, b) { return a - b});
console.log(numbers);
numbers.forEach(element => {
    console.log(element);
});