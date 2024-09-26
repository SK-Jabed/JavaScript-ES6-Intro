// -------- Function Declaration -------- 

// function add(a, b) {
//     const result = a + b;
//     return result;
// }

function add(a, b) { 
    return a + b;
}

// -------- Function Expression --------
const add2 = function(a, b) {
    return a + b;
}


// Arrow Function
// const add3 = (a, b) => a + b;
const add3 = (a, b) => a + b;
const add4 = (num1, num2, num3, num4) => num1 + num2 + num3 + num4;
const sum2 = add4(5, 10, 15, 20);

console.log(sum2);

const multiply = (num1, num2) => num1 * num2;
const multi = multiply(5, 6);

console.log(multi);


const sum = add(55, 45);
console.log(sum);