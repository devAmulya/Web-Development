// maximum number 
const findMax = (arr) => {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

// sum of all elements 
const calculateSum = function(arr) {
    let sum = 0;
    arr.forEach(function(num) {
        sum += num;
    });
    return sum;
}

// count odd numbers 
function countOddNumbers(arr) {
    let count = 0;
    arr.forEach(function(num) {
        if (num % 2 !== 0) {
            count++;
        }
    });
    return count;
}

const A = [4, 8, 2, 11, 6, 7, 10];

console.log("Ex Array:", A);
console.log("Maximum number:", findMax(A));
console.log("Sum of all elements:", calculateSum(A));
console.log("Count of odd numbers:", countOddNumbers(A));
