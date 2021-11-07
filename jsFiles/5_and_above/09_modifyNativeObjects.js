'use strict';

// Add a reverse method to the string object
String.prototype.reverse = function () {
    return Array.from(this).reverse().join('');
}

console.log("Alabama".reverse());

// Add a method to Sting object so that they can tell whether they are palindrome or not

function Phrase(content) {
    this.content = content;
    
    this.processor = function (inputString) {
        return inputString.toLowerCase();
    }

    this.processedContent = function () {
        return this.processor(this.content);
    }
    
    this.isPalindrome = function () {
        return this.processedContent() === this.processedContent().reverse();
    }
}

String.prototype.isPalindrome = function () {
    return new Phrase(this).isPalindrome();
}

console.log("racecar".isPalindrome());

// Add a blank method to the String object prototype that returns true if the string is empty or consists solely of whitespace (spaces, tabs, or newlines). Hint: Use a regular expression (Section 4.3.2). You will need the regex syntax for the start and end of a string (Figure 7.6).

String.prototype.blank = function () {
    if(this.length === 0)
        return true;
    else {
        for(let i = 0; i < this.length; i++) {
            if(this[i] !== ' ' || this[i] !== '\t' || this[i] !== '\n')
                return false;
        }
        return true;
    }
}

console.log("foobar".blank());
console.log(''.blank());

// Using whichever method you prefer (direct indexing or slicing), add a last method to the Array object prototype that returns the last element of an array.

Array.prototype.last = function () {
    return this.slice(-1)[0];
}

console.log([1,2,3,4].last());