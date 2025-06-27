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
let age = 25;
console.log(age > 18 ? "Vote" : "Cannot Vote" )

// Conditional Statement 

if(age > 18){
    console.log('Vote');
}
else{
    console.log('Cannot Vote');
}
let number = 5;
if(number == 1){
    console.log('A');
}
else if(number == 2){
    console.log('B');
}
else if(number == 3){
    console.log('C');
    if(age>18){
        console.log('Vote')
    }
    else{
        console.log('Cannot Vote')
    }
}
else{
    console.log('Not a ABC');
}

let num = 3;
switch(num){
    case 1: console.log('A');
    break;
    case 2: console.log('B');
    break;
    case 3: console.log('C');
    break;
    case 4: console.log('D');
    break;
    default: console.log('F');
    break;    
}