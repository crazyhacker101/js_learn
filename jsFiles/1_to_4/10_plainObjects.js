'use strict';

let user = {};
// Keys are strings 
user["firstName"] = "mangal";
user["lastName"] = "pandey";
user.class = 2018;

// Display a property value
console.log(user);
console.log(user.firstName, user["lastName"], user["class"]);

// What if we do not specify value -> It doesn't get created
user["id"];

console.log(user["id"], !!user["id"]);
console.log(user);


// Make a actors object at once
let actors = {
    actorName: "Krk",
    "actorWealth": 567,
    actorHealth: -1
};

console.log(actors);
console.log(actors.actorName, actors.actorWealth, actors["actorHealth"]);

// Using constructor
let user2 = new Object({ firstName: 'Michael', lastName: 'Hartl' });
console.log(user2);