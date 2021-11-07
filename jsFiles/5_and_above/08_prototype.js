'use strict';

function reverseString(userInput) {
    return Array.from(userInput).reverse().join('');
}

function Phrase(content) {
    this.content = content;
    
    this.processor = function (inputString) {
        return inputString.toLowerCase();
    }

    this.processedContent = function () {
        return this.processor(this.content);
    }
    
    this.isPalindrome = function () {
        return this.processedContent() === reverseString(this.processedContent());
    }
}

let phrase = new Phrase('Racecar');
console.log(phrase.processedContent(), phrase.isPalindrome());

function TranslatedPhrase(content, translation) {
    this.content = content;
    this.translation = translation;

    this.processedContent = function () {
        return this.processor(this.translation);
    }
}


// we’ll use an important idea in object-oriented programming called inheritance, and arrange for TranslatedPhrase to inherit the desired palindrome method directly from Phrase. The way to do this in JavaScript is to set the prototype of the second object type equal to an instance of the first;

TranslatedPhrase.prototype = new Phrase();
let frase = new TranslatedPhrase("recognize", "reconocer");
console.log(frase.translation, frase.isPalindrome());