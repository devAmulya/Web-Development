// var age = 25;

// if(true){
//     console.log(age); // defined(global scope)
// }

// function solve(){
//     var age = 25;
//     console.log(age);
// }
// console.log(age); //Undefined for var(function scoped)
// solve();

var x = 10;
// var x = 20; //No redeclaration

{
    let a = 10;
    console.log(a); //block Scoped
}

let b = 20;
// let b = 30; //No redeclaration
b = "HI"; //Reinitialization
console.log(b);

const a = 28;
console.log(a);

// const a = 30; //No redeclaration
a - 40; // Ignored(No reinitialization)
console.log(a);

let marks;
marks = 20.2345;
marks = "World";
marks = null;
marks = 1.7976931348623157e+308;   //Infinte after this number 
console.log(marks);
console.log(typeof(marks));

let s1 = Symbol("userid");
let s2 = Symbol("userid");

console.log(3+'33');