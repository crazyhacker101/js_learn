'use strict';

const sonnet = `Let me not to the marriage of true minds Admit impediments. Love is not love Which alters when it alteration finds, Or bends with the remover to remove. O no, it is an ever-fixed mark That looks on tempests and is never shaken; It is the star to every wand'ring bark, Whose worth's unknown, although his height be taken. Love's not time's fool, though rosy lips and cheeks Within his bending sickle's compass come: Love alters not with his brief hours and weeks, But bears it out even to the edge of doom. If this be error and upon me proved, I never writ, nor no man ever loved.`;

const words = sonnet.split(" ");
console.log(words);

// let wordCount = {};
// for(let i = 0; i < words.length; i++) {
//     let word = words[i];
//     if(wordCount[word]) {
//         wordCount[word]++;
//     } else {
//         wordCount[word] = 1;
//     }
// }

// console.log(wordCount);

/////////////////////
// Using builtin obj Maps 
let uniques = new Map();
console.log(uniques);

for(let i = 0; i < words.length; i++) {
    const currWord = words[i];
    if(uniques.get(currWord)) {
        let currValue = uniques.get(currWord);
        uniques.set(currWord, ++currValue);
    } else {
        uniques.set(currWord, 1);
    }
}

console.log(uniques);