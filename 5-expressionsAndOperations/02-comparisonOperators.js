/*
Comparison Operators
*/

//equality
console.log('3' == 3); //type coersion
console.log("three" == 3); //false
console.log(0 == false == '' == null);

//strict equality -> // checks both value and type
console.log(3 === 3); 
console.log(3 === '3');

//not equal
console.log('4' != 4); // != doesn't care about type, output -> false

//strict not equal
console.log('3' !== 3) //checks type and value

//greater than
console.log(3 > 2);

//less than
console.log(2 < 3);

//greater than or = to
console.log(3 >= 3);

//less than or equal to
console.log(4 <= 4);

//And: returns true if the left and right are both true
console.log(true && true); // output -> true
let x = 5;
console.log(x < 10 && x > -5); //true
console.log(x < 10 && x > 15); //false

//tangent
let str = 'a';
console.log(str < 'p');

//or: return true if the left OR right are true
console.log(true || false); //true
let x = 5;
console.log(x < 10 || x > 15); //true