/*
INTRO TO ARRAYS

have [] 
can hold multiple data types
great for listing
*/

//overview calling
let students = ['Tony', 'Marshall', 'Rhys', 'Ray', 23, true, ['Ryan', 'Iesha']];
//index numbers   1         2          3      4    4     5       6        7

console.log(typeof students); //output is 'object'
console.log(students[2]);     //Rhys

/*
Challenge:
Go into the nested array and get 'Iesha'
print out 'Hello Iesha, you look nice today"
*/

console.log(`Hello ${students[6][1]}, you look nice today`)
console.log(`Hello', students[6][1] , 'you look nice today'`);

let food = ['Pecan pie', 'Shrimp', 'Quesedilla', 'Cheese cake', 'Hotdog'];

for (let i = 0; i < food.length; i++) {
    console.log(food [i]);
}

for (let f of food){
    console.log(f);
}
food.push('Pizza') //appends pizza to the end od the array
//console.log(food);
food.splice(1, 1, 'Bananas'); //first num: the index to start at, second num: number of things to remove, third num: replacement value
//console.log(food);
food.splice(2, 0, 'Sweet Potato Pie');
//console.log(food);
food.pop(); //removes the last value








