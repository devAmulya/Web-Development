let num = 153;
let num1 = num;
let sum = 0;
//sum of all its digits
while(num1 > 0){
    sum += num1%10;
    num1 = (num1/10) | 0;
}
console.log("Sum of its digit : "+sum);
//Armstrong
let num2 = num;
let arm = 0;
const digits = String(num2).length;

while (num2 > 0) {
    const digit = num2 % 10;
    arm += Math.pow(digit, digits);
    num2 = Math.floor(num2 / 10);
}
console.log("Is it an Armstrong number?", arm === num ? "Yes" : "No");

//Prime
let isPrimeNumber = true;
if (num <= 1) {
    isPrimeNumber = false;
} else {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrimeNumber = false;
            break;
        }
    }
}
console.log("Is it a prime number?", isPrimeNumber ? "Yes" : "No");
//its factors

let number = num;
console.log("Factors:");
for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
        console.log(i);
    }
}

