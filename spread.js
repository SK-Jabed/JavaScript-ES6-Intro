const max = Math.max(6, 22, 38, 50, 33, 69, 41, 15);

console.log(max);


const numbers = [15, 28, 38, 45, 88, 12, 65, 46];
const arrayMax = Math.max(...numbers);

// console.log(...numbers);
console.log(arrayMax);


// Use Spread Operator To Copy
const evenNumbers = [4, 6, 12, 8, 2, 10];
const numbers2 = numbers;
numbers2.push(14);
console.log(numbers2);
