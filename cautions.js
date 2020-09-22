// newline usually means ; but not always do use ; at end of statement
console.log('\n'+'*'.repeat(5)+' Importance of ; '+'*'.repeat(5)+'\n');

const hey = 'hey'
const you = 'hey'
const heyYou = hey + ' ' + you

// ['h', 'e', 'y'].forEach((letter) => console.log(letter))

/* Javascript interpreted above code as
const hey = 'hey';
const you = 'hey';
const heyYou = hey + ' ' + you['h', 'e', 'y'].forEach((letter) => console.log(letter))
*/

console.log('\n'+'*'.repeat(5)+' Nested multiline comments not allowed '+'*'.repeat(5)+'\n');
// /* Sample /* nested */ comment */

console.log('\n'+'*'.repeat(5)+' Type conversions '+'*'.repeat(5)+'\n');
// /* Sample /* nested */ comment */

let num = 123;
let str = '456';
let someVar;
console.log(typeof(num),num, String(num), typeof(String(num)));
console.log(typeof(str),str, Number(str), typeof(Number(str)));

console.log('\n>>>>> For undefined value >>>>>')
console.log(typeof(someVar),someVar, String(someVar), typeof(String(someVar)));
console.log(typeof(someVar),someVar, Number(someVar), typeof(Number(someVar)));

// Error gives NaN
console.log('\n>>>>> For error value >>>>>')
console.log(typeof(Number('Shriya')),Number('Shriya'),String(Number('Shriya')));

console.log('\n>>>>> For null value >>>>>')
let nullVar = null;
console.log(typeof(nullVar),nullVar, String(nullVar), typeof(String(nullVar)));
console.log(typeof(nullVar),nullVar, Number(nullVar), typeof(Number(nullVar)));

// conditional operator ?
console.log('\n'+'*'.repeat(5)+' conditional operator ? '+'*'.repeat(5)+'\n');
age = 5;
let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';
console.log(message);

//while loop
console.log('\n'+'*'.repeat(5)+' while loop '+'*'.repeat(5)+'\n');
let i = 3;
while (i) { // when i becomes 0, the condition becomes falsy, and the loop stops
  console.log( i );
  i--;
}

// do while loop
console.log('\n'+'*'.repeat(5)+' do while loop '+'*'.repeat(5)+'\n');
let j = 0;
do {
  console.log( j );
  j++;
} while (j < 3);

// for loop
console.log('\n'+'*'.repeat(5)+' for loop '+'*'.repeat(5)+'\n');

for(let l=0; l<3; l++){
    console.log(l)
}
// index variable declared in for loop not visible outside
// console.log(String(l))

// for loop with variable declared outside
console.log('\n'+'*'.repeat(5)+' for loop with vairable declared outside '+'*'.repeat(5)+'\n');
let k = 0
for(; k<3; k++){
    console.log(k)
}
console.log('Value of k outside loop '+k)

console.log('\n'+'*'.repeat(5)+' continue keyword '+'*'.repeat(5)+'\n');

for(let k=0; k<5;k++){
    if (k%2==0) continue;
    console.log(k);
}

console.log('\n'+'*'.repeat(5)+' break keyword '+'*'.repeat(5)+'\n');
let m = 2
for(let i=0;;i++){
    if(i == m**2) break;
    console.log(i);
}

// using labels with break and continue
console.log('\n'+'*'.repeat(5)+' using labels with break and continue '+'*'.repeat(5)+'\n');

outer: for (let i = 0; i < 8; i++) {

    inner: for (let j = 10; j > 0; j--) {
        if (i>j) break outer;
        if (j%2 == 0) continue inner; //inner doesn't require label without label nearest is considered
      console.log('i',i,'j',j);
    }
}

// swith case
console.log('\n'+'*'.repeat(5)+' switch case '+'*'.repeat(5)+'\n');

  let a = 2 + 2;

  switch (a) {
    case 3:
      console.log( 'Too small' );
      break;
    case 4:
      console.log( 'Exactly!' );
      break;
    case 5:
      console.log( 'Too large' );
      break;
    default:
      console.log( "I don't know such values" );
  }