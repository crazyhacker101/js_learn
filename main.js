const Phrase = require('mhartl-palindrome');

const inputString = prompt("Enter a string to check its palindromicity", "abba");  
let phrase = new Phrase(inputString);

if(phrase.palindrome()) {
    alert(`"${phrase.content}" is a palindrome.`);
} else {
    alert(`"${phrase.content}" is not a palindrome.`);
}

// alert(new Phrase("Madam, I' m Adam!!").palindrome()); 
// alert(new Phrase("not a palindrome").palindrome()); 