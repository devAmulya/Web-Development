const greet = () => {
    console.log("Hello world");
}

greet();

const square = (num) => num*num;

console.log(square(3));

const calculate = (a,b,operation) => {
    return operation(a,b);
}

// method1
const result = calculate(3,4,function(num1, num2){
    return num1+num2;
})

console.log(result);

//method2
const substraction = (a,b) => a-b;
console.log(calculate(8,3,substraction));




