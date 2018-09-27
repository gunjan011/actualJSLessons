/*
RECAP
*/

let stringExample = 'string';
let numberExample = 0;

let conditionExample = 0;

//if else example
if (typeof conditionExample === "string"){
    console.log("yep, it\'s a string");
} else if (typeof conditionExample === "number"){
 console.log("yep, it's a number");
} else if (typeof conditionExample === "boolean"){
    console.log("yep, it's a boolean");
}
console.log(typeof conditionExample);
//switch
switch (typeof conditionExample) {
    case "string":
    console.log("this is string");
    break;
    case "number":
    console.log("this is a number");
    break;
    default:
    console.log("this variable is not a string or number");
    break;
}

//ternary
(typeof conditionExample === 'string') ? console.log("our variable is a string")
: (typeof conditionExample === "number") ? console.log("our var is a number")
: (typeof conditionExample === "undefined") ? console.log("our var is undef")
: console.log("this is our default case") ;


let FB = 15;
//using if statement

if (FB % 5 === 0 && FB % 3 === 0) {
    console.log("Fizz Buzz")
} else if (FB % 3 === 0) {
    console.log("Fizz")
} else if (FB % 5 === 0){
    console.log("Buzz")
}


//using switch
switch (true){
    case (FB % 15 === 0):
    console.log('Fizz Buzz');
    break;
    case (FB % 5 === 0):
    console.log('Buzz');
    break;
    case (FB % 3 === 0):
    console.log('Fizz');
    break;
}

//using ternary

(FB % 15 === 0) ? console.log("Fizz Buzz")
: (FB % 5 === 0) ? console.log("Buzz")
: (FB % 3 === 0) ? console.log("Fizz")
: console.log("your number is not divisible by 3 or 5");
