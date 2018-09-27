/*
IF ELSE
*/

weather = 75;

if (weather < 70){
    console.log('Wear a jacket');
} else {
    console.log('No jacket necesasary!');
}

/*
Challenge
Write an if else statement that checks your name;
If it is your name. console.log "Hello, my name is <your name>";
If the name does not match, console.log "Hello, what is your name?";
*/

name = 'gunjan';

if (name === 'gunjan'){
console.log('Hello, may name is gunjan');
} else {
    console.log('Hello, what is your name?');
}

/*
Challenge
capitalize first letter of name
*/


function name(string){
    //console.log(string.charAt(0).toUpperCase());
    //console.log(string.slice(1).toLowerCase());
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }
console.log.toString(name('ruby')); // not working

let name = 'tyler';

if (name[0] == name[0].toUpperCase()){
    firstLetter = name[0] + name.slice(1).toLowerCase();
    console.log(firstLetter);
} else {
    otherLetters = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    console.log(otherLetters);
}

/*
ELSE IF Challenge

Set a variable age and give it an age of your choice
Set an else if statement that convey the following:
If the age is 17 or younger, console.log 'Sorry, you're too young to do anything.'
If the age is at least 18, console.log 'Yay! You can vote!'
If the age is at least 21, console.log 'Yay! You can drink!'
if the age is at least 25, console.log 'Yay! You can rent a car!'
*/

age = 22;
if (age > 17){
    console.log('Sorry, you are too young to do anything.');
} else if (age >= 18 && age < 21) {
    console.log('Yay! you can vote!');
}



