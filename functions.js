'use strict';
/* 
JavaScript arguments are passed by value: The function only gets to know the values, not the argument's locations.
If a function changes a primitive type's argument's value, it does not change the parameter's original value.
*/

var a = 55;
function WillIChange(param_a) {
    param_a = 100;
    console.log(`The value of within the function WillIChange() is ${param_a}`);
}

console.log(`value of a is ${a}`);      //This will print the original value of the variable (value of a is 55 )    
WillIChange(a);                         //This will print the value of 100 since the variable is being passed by value (The value of within the function WillIChange() is 100)
console.log(`value of a is now: ${a}`); //This will print the original value of the variable (value of a is now: 55 )   

/*
In JavaScript, object references will behave like they are passed by reference:
If a function changes an object's property, it changes the original value.
*/

var Player = {
    firstName: "Peyton",
    lastName: "Manning"
}

function ChangeMyName(obj) {
    console.log(`Objects are passed by reference in JavaScript. Changing the Object Properties`);
    if(obj) {
          obj.firstName = "Tom";  
          obj.lastName = "Brady";
    }
}
console.log(`Original Value: ${Player.firstName} ${Player.lastName}`);
ChangeMyName(Player);
console.log(`After Method Call: ${Player.firstName} ${Player.lastName}`);