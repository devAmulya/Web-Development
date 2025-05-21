// Define variables
var principal = 31000; // Initial principal amount
var rate = 0.05; // Annual interest rate (5%)
var numberOfTimesCompounded = 12; // Compounded monthly
var timeInYears = 3; // Time period in years

// Calculate compound interest
var amount = principal * Math.pow(1 + (rate / numberOfTimesCompounded), numberOfTimesCompounded * timeInYears);

// Output the result
console.log("The compound interest after " + timeInYears + " years is: " + (amount - principal).toFixed(0));
