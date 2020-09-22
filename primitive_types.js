/* primitive types also called value types
    > String
    > Number
    > Boolen
    > undefined
    > null
*/

let name = 'Shriya'; // String literal
let age = 26; // Number literal
let isApproved = true; //Boolen literal
let firstName; // undefined by default
let lastName = null // used to explicitly clear value of a variable

/* JS is Dynamcally typed language
    type of variable can be changed at run time
*/

console.log('\n'+'*'.repeat(30)+'\n');

console.log(name,typeof(name));
name = 1
console.log(name,typeof(name));


console.log('\n'+'*'.repeat(30)+'\n');

console.log(age,typeof(age));
age = 26.2
console.log(age,typeof(age));


console.log('\n'+'*'.repeat(30)+'\n');

console.log(firstName,typeof(firstName));

console.log('\n'+'*'.repeat(30)+'\n');

// null returns Object as its type
console.log(lastName,typeof(lastName));

console.log('\n'+'*'.repeat(30)+'\n');
