//Iterating
let food = ['Pecan pie', 'Shrimp', 'Quesedilla', 'Cheese cake', 'Hotdog'];

food.forEach(f => {console.log(f)})
food.forEach((food,number) => {
    console.log(food);
    console.log(number);
})

/*
Challenge:
Create a list (with an array) of movies
Use .forEach() to list your movies
Add another movie at the end
And replace one of your existing movies with another one
*/

let movies = ['Phantom Menance', 'Attack of the Clones', 'Revenge of the sith'];

movies.forEach((movies) => {
    console.log(movies);
})
movies.push('Inception');
movies.splice(1, 1, 'Empire strikes back')
console.log(movies);

let long = [1,2,3,4,5,6,7,8,9,10];
console.log(long.length);

let newArray = new Array(73);
console.log(new.Array.length);
newArray.forEach(el => {       //el is short for element
    console.log(el);
})
console.log(newArray);