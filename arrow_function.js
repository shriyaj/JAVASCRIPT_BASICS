/*
Arrow functions looks like

let func = (arg1, arg2, ...argN) => expression

which is equivalent to

let func = function(arg1, arg2, ...argN){
    return expression;
}

if we use curly braces in arrow function definition then we need explicit return
use curly braces for multiline definition and dont forget to return 
*/
console.log('\n'+'*'.repeat(5)+' Arrow fn without paramters '+'*'.repeat(5)+'\n');

let sayHi = () => console.log("Hello!");

sayHi();

console.log('\n'+'*'.repeat(5)+' Arrow fn with paramters and return having number '+'*'.repeat(5)+'\n');
let sum = (a,b) => (a+b);
console.log(sum(2,3));

console.log('\n'+'*'.repeat(5)+' Arrow fn with explicit return '+'*'.repeat(5)+'\n');
// if using braces and return not added function returns undefined
let sum2 = (a,b) => {
    // (a+b)
    return(a+b);
};
console.log(sum2(2,3));

