'use strict';

/* Closure
var a = 5;

console.log(`The Value of ${a}`); //This will print out 5

setTimeout(function() {
    a = a + 2;
    console.log(`The Value of ${a}`); //This will print out 9
}, 1000);

a = a + 2;

console.log(`The Value of ${a}`); //This will print out 7
*/


//var input_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var input_array = [1, 2, 3, 4, 5, 6, 7];
var reversed_array = [];

//------------------------- Approach #1 --Using Another Array Approach --------------------------------
/*
console.log(`Initial Input: ${input_array} ` );

//----Simplistic Approach

//for(let i = (input_array.length - 1); i >= 0; i--) 
//{
//    reversed_array.push(input_array[i]);
//}

let array_Size = (input_array.length - 1);
input_array.forEach(function (currentElement, currentIndex, completeArray) {
    reversed_array.push(completeArray[array_Size]);
    array_Size--;
});

console.log(`Reversed Input: ${reversed_array} `);
 
*/


//------------------------- Approach #2 --Using A Swap Approach ---------------------------------------

console.log(`Initial Input: ${input_array} ` );

let index = (input_array.length - 1);
let start_index = 0;
for(let i = start_index; i < index; i++)  
{
    console.log(`Array: ${input_array}`);
    console.log(`Index Variable Value: ${i}`);
    console.log(`Element Value: ${input_array[i]} `);

    let swap = input_array[i]; 
    let swap2 = input_array[index];

    console.log(`Swaped-1 Values: ${swap}`);
    console.log(`Swaped-2 Values: ${swap2}`);

    input_array[i] = swap2;
    input_array[index] = swap;
    index = index - 1;
}

console.log(`Final Input: ${input_array} ` );


/*
let index = (input_array.length - 1);
let stop_Index = index / 2;
let start_index = 0;
input_array.forEach(function(element, idx, array) 
{
    console.log(`Array: ${array}`);
    console.log(`Index Variable Value: ${index}`);
    console.log(`Array Index: ${idx}`);
    console.log(`Element Value: ${element} `);

    let swap = array[idx]; 
    let swap2 = array[index];
    
    if(index != stop_Index)  {
        array[idx] = swap2;
        array[index] = swap;
       
    }
     index = index - 1;
    //console.log(`Reverse Element Value: ${array[index]} `);
    //reversed_array.push(array[index]);
});
*/
//console.log(`Initial Input: ${input_array} ` );
