console.log("Operators");

let a = 10;
let b =5;

// Unary
console.log(++a);
console.log(a++);
console.log(b--);
console.log(--b);

// Arithmetic

console.log(a+b);  
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);

// Assignment 
a += 10;
console.log(a);

// Relational
console.log(5 >= 5);
console.log('10' == 10); //Loose Equality
console.log('10' === 10); //Strict Equality

// Ternary Operator
let age = 15;
console.log(age > 18 ? "Vote" : "Cannot Vote" )