// String object has only one attribute
// i.e. the length attribute

let password = "kumarMangalam";
console.log(password.length);

// Control flow
if(password.length > 4 && password.length < 10) {
    console.log("Right password");
}else {
    console.log("Nope, Wrong");
}

//////////////////////

let x = "foobar";
let y = "";

if(x.length === 0 || y.length === 0) {
    console.log("Atleast one of the strings is empty");
} else {
    console.log("Both strings has length > 0");
}

// Negation operator --> !
// which just converts true to false and false to true
console.log(!'');
console.log(!5);

// Bang Bang --> Let's u see the boolean context of the the value that is not boolean by itself
// Not all booleans are the result of comparisons, and in fact every JavaScript object has a value of either true or false in a boolean context. We can force JavaScript to use such a boolean context with !! (pronounced “bang bang”); because ! converts between true and false, using two exclamation points returns us back to the original boolean:

console.log("######################");
console.log(!!true);
console.log(!!false);
console.log(!!"foo");
console.log(!!'');
console.log(!!' ');
console.log(!!null);

// More to read in && and || shirt circuiting from written tuts
// See its excersises 