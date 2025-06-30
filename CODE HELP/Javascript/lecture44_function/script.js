// Function Definition
function sayObjectTopic(){
    console.log("Functions");
}

// Function Call 
sayObjectTopic();

function printCounting(){
    for(let i = 0; i < 10; i++){
        console.log(i);
    }
}

printCounting();

// Parametrized Function
function printNumber(num){
    console.log("Printing Number", num);
}

printNumber(5);

function getSum(a,b,c){
    let sum = a+b+c;
    return sum;
}

let sum = getSum(2,34,4);
console.log(sum);

function getMultiplication(a,b){
    return a*b;
}

console.log(getMultiplication(2,10));

let solve = function(a,b) {
    return a*b;
}
console.log(solve(2,3));

function getExp(x,y){
    return x**y;
}
console.log(getExp(2,4));

let getExp1 =function (x,y){
    return x**y;
}

console.log(getExp1(2,4));

let getExp2 = (x,y) => {
    let ans = x**y;
    return ans;
}
console.log(getExp2(2,4));