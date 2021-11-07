'use strict';

// https://stackoverflow.com/questions/6843951/which-way-is-best-for-creating-an-object-in-javascript-is-var-necessary-befor/30097697#30097697

function reverse(input) {
    return Array.from(input).reverse().join('');
}

// Function constructor:
// add a louder method to the Phrase object that returns a LOUDER (all-caps) version of the content.

function Phrase(content) {
    this.content = content;

    this.isPalindrome = function checkPalindrome() {
        let processedContent = this.content.toLowerCase();
        return processedContent === reverse(processedContent);
    };

    this.louder = () => {return this.content.toUpperCase();};
}

let phrase = new Phrase('Racecar');
console.log(phrase.content, phrase.isPalindrome(), phrase.louder());