//Question 1 
//{
// const numbers = [1, 2, 3, 4, 5];
// const squaredNumbers = numbers.map(num => num * num);
// console.log('Q1 - Squared Numbers:', squaredNumbers);
//}



//Question 2 
//{
// function getGrade(score) {
//     return score >= 90 ? 'A' :
//            score >= 80 ? 'B' :
//            score >= 70 ? 'C' :
//            score >= 60 ? 'D' : 'F';
// }
// console.log('Q2 - Grade:', getGrade(85)); // Example usage
//}



//Question 3 
//{
// const car = {
//     company: 'Toyota',
//     model: 'Corolla',
//     year: 2020
// };

// function updateCarYear(newYear) {
//     car.year = newYear;
// }
// updateCarYear(2025);

// const { model, year } = car;
// console.log('Q3 - Car Model:', model);
// console.log('Q3 - Car Year:', year);
//}



//Question 4 
//{
// const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];

// function isPrime(num) {
//     if (num < 2) return false;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) return false;
//     }
//     return true;
// }

// const primeNumbers = numbers.filter(isPrime);
// console.log('Q4 - Prime Numbers:', primeNumbers);
//}



//Question 5 
//{
// // map - transform data
// const nums = [1, 2, 3];
// const doubled = nums.map(n => n * 2);
// console.log('Q5 - Map Example (Doubled):', doubled);

// // filter - filter data
// const even = nums.filter(n => n % 2 === 0);
// console.log('Q5 - Filter Example (Even):', even);

// // reduce - aggregate data
// const sum = nums.reduce((acc, curr) => acc + curr, 0);
// console.log('Q5 - Reduce Example (Sum):', sum);
//}



//Question 6 
//{
// async function fetchData() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//         const data = await response.json();
//         console.log('Q6 - Fetched Data:', data);
//     } catch (error) {
//         console.error('Q6 - Error fetching data:', error);
//     }
// }
// fetchData();
//}



//Question 7 
//{
// const person = {
//     name: 'Alice',
//     address: {
//         city: 'New York',
//         zip: '10001'
//     }
//     // contact is intentionally missing
// };

// const phoneNumber = person.contact?.phone;
// console.log('Q7 - Phone Number:', phoneNumber); // undefined, safely handled
//}
