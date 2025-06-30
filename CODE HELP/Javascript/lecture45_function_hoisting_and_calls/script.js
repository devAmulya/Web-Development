sayMyName("Amulya");

//Arrow function or function expression doesnot work
// let sayMyName = (finalName) => {
//     console.log(finalName);
// }

function sayMyName(finalName){
    console.log(finalName);
    // console.log(age);
}

// let age = 20;

// Variable assign
function greet(){
    console.log("Greeting for the day");
}

greet();

// Function passed as argument
function greetMe( fullName){
    console.log("hello", fullName);
    greet();
}

greetMe("Amulya");

// function as return
function solve(number){
    return function(number){
        return number*number;
    }
}

let ans = solve(5);
console.log(ans(10));

// Used in DS
const arr = [
    function(a,b){
        return a+b;
    },
    function(a,b){
        return a-b;
    },
    function(a,b){
        return a*b;
    }
];

let first = arr[2];
console.log(first(5,10));

// Property
let obj = {
    age:25,
    wt:36,
    ht:180,
    greet: ()=>{
        console.log("Functions")
    }
}
console.log(obj.age);
obj.greet();