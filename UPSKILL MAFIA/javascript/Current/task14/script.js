const divide = (numerator, denominator) => {
    return new Promise((resolve, reject) => {
        if (denominator === 0) {
            reject("Error: Division by zero is not allowed.");
        } else {
            resolve(numerator / denominator);
        }
    });
};

console.log("Example 1");
console.log("Dividing 10 by 2...");
divide(10, 2)
    .then(result => {
        console.log("Result 1 :", result);
    })
    .catch(error => {
        console.log(error);
    });

console.log("Example 2");
console.log("Dividing 10 by 0...");
divide(10, 0)
    .then(result => {
        console.log("Result 2 :", result);
    })
    .catch(error => {
        console.log("Result 2 :", error);
    });

console.log("Example 3");
console.log("Dividing 0 by 5...");
divide(0, 5)
    .then(result => {
        console.log("Result 3 :", result);
    })
    .catch(error => {
        console.log(error);
    });

console.log("Example 4");
console.log("Dividing -8 by 4...");
divide(-8, 4)
    .then(result => {
        console.log("Result 4 :", result);
    })
    .catch(error => {
        console.log(error);
    });

console.log("Example 5");
console.log("Dividing 7 by -3...");
divide(7, -3)
    .then(result => {
        console.log("Result 5 :", result);
    })
    .catch(error => {
        console.log(error);
    });
