'use strict';

// Given a list of states. filter out the states which are single worded.

let states = ["Kansas", "California", "North Dakota", "South Dakota"];

// Solution using imperative style of programming :

function imperativeSingles(states) {
    let singulars = [];
    states.forEach(state => {
        if(!state.includes(' '))
            singulars.push(state);
    });
    return singulars;
}

console.log(imperativeSingles(states));

////////////////////////////////////////////
// Array.filter() -> which allows us to filter our data based on some boolean criterion.

// Filtering the odd ones
console.log([1,2,3,4,5].filter(num => num % 2 != 0));

////////////////////////////////////////////
// Solution using functional style of programming :

function functionalSingles(states) {
    return states.filter(state => !state.includes(' '));
}

console.log(functionalSingles(states));


// Exercises
// Filter the states which have dakotas in them.
function filterDakotas(states) {
    return states.filter(state => state.toLowerCase().includes('dakota'));
}

console.log(filterDakotas(states));