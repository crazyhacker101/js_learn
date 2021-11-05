'use strict';

// PS: Given the states array containing the state name, convert it into url friendly form. 1. Convert everything into lowercase 2. If you see whitespace replace it with -
// For eg: Washington DC -> washington-dc

// Solution using Imperative way of Programming:
let states = ["Kansas", "California", "North Dakota", "South Dakota"];

function imperativeUrls(states) {
    let urls = [];
    states.forEach((state) => {
        urls.push(state.toLowerCase().split(" ").join("-"));
    });
    return urls;
}

console.log(imperativeUrls(states));

/////////////////////////////////////////////////////
// map() tutorial
// which lets us map a function over an array of elements. It’s often a powerful alternative to looping. Adv -> Gives a new array without modifying the original one. Also u don't need to create an auxiliary array for that.

console.log( [1, 2, 3, 4].map( num => num * num) );
console.log( [1, 2, 3, 4].map( num => {return num * num * num}) );


// Solving the url problem
function urlify(stateName) {
    return stateName.toLowerCase().split(" ").join("-");
}

function functionalUrls(states) {
    return states.map( state => urlify(state));
}

console.log(functionalUrls(states));


/////////////////////////////////////////////////
// Exercise
// Using map, write a function that takes in the states variable and returns an array of URLs of the form https://example.com/<urlified form>.

const indianStates = ['New Delhi', 'Maharashtra', 'Uttar Pradesh', 'Goa'];
function makeUrls(state) {
    return `https://example.com/${state.toLowerCase().split(" ").join("-")}`;
}

function stateUrls (indianStates) {
    return indianStates.map(state => makeUrls(state));
}

console.log(stateUrls(indianStates));