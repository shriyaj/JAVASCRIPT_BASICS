/* reference types
    > Object
    > Array
    > Function
*/

/* Object
    > Multple related variables can be put inside object
*/
console.log('\n'+'*'.repeat(30)+'\n');
console.log('OBJECTS'+'\n');

let person = {
    name: 'Shriya',
    age: 30
}; // {} is object literal

console.log(person);

console.log('\n'+'*'.repeat(5)+' Dot notation '+'*'.repeat(5)+'\n');
// dot notation
person.name = 'Jane Doe';
console.log(person.name);

console.log('\n'+'*'.repeat(5)+' Bracket notation '+'*'.repeat(5)+'\n');
// Bracket notation
person['name'] = 'John Doe';
console.log(person.name);

// dot notation should be default choice
// if property being selected is decided at run time [] notation should be the choice

console.log('\n'+'*'.repeat(5)+' Deciding property to access at run time '+'*'.repeat(5)+'\n');
let selection = 'name'
console.log(person[selection]);



console.log('\n'+'*'.repeat(30)+'\n');
console.log('ARRAYS'+'\n');
/*
    when we need to use list
    indexed from 0
    can store different type  in same array
    array is an object internally so can access properties by accessing key value pairs i.e. using dot notation
*/

let selectedColors = ['red','blue']; // [] is array literal
console.log(selectedColors);

console.log('\n'+'*'.repeat(5)+' Accessing index '+'*'.repeat(5)+'\n');
console.log(selectedColors[0]);

console.log('\n'+'*'.repeat(5)+' Adding items '+'*'.repeat(5)+'\n');
selectedColors[2] = 'green'
console.log(selectedColors);

console.log('\n'+'*'.repeat(5)+' Storing different types '+'*'.repeat(5)+'\n');
selectedColors[3] = 3;
console.log(selectedColors);

console.log('\n'+'*'.repeat(5)+' typeof Array '+'*'.repeat(5)+'\n');
console.log(typeof(selectedColors));

console.log('\n'+'*'.repeat(5)+'Accessing array properties as objects '+'*'.repeat(5)+'\n');
console.log('length property: '+selectedColors.length);


console.log('\n'+'*'.repeat(30)+'\n');
console.log('FUNCTIONS'+'\n');

/* Set of statements that perform a task
    Since we are not declaring function as variable we dont need to add ; at end of }
    parameter won't be accessible outside the function body
*/

console.log('\n'+'*'.repeat(5)+' Defining and calling function '+'*'.repeat(5)+'\n');
function greet() {
    console.log('Hello world!');
}

greet();

console.log('\n'+'*'.repeat(5)+' Function with parameter '+'*'.repeat(5)+'\n');

// can't use same function name as greet, it over rides last function's definition and above function call returns Hello, undefined
// name is parameter to the function declaration
function greet(name){
    console.log('Hello, '+name);
}

// Shriya is argument to the function call
greet('Shriya');
greet('World!');

console.log('\n'+'*'.repeat(5)+' Function with multiple parameters '+'*'.repeat(5)+'\n');

function greet2(name,lastName){
    console.log('Hello, '+name+ ' '+ lastName);
}

// if argument not passed default value of parameter is considered and i.e undefined
greet2('Shriya');
greet2('John','Doe');

console.log('\n'+'*'.repeat(5)+' Function with return '+'*'.repeat(5)+'\n');

function square(number){
    return(number**2);
}
console.log('Square of number 2: '+square(2));