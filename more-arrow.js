const difference = (x, y) => x - y;
const multiply = (first, second, third) => first * second * third;

// Single Parameter
const getAge = (person) => person.age;
const student = {name: "Sheikh Jabed", age: 19}
const age = getAge(student);
console.log(age);

const getThird = numbers => numbers[2];
const third = getThird([5, 6, 7, 8, 9, 10]);
console.log(third);

const doubleIt = num => num * 2;

// No parameter
const getPi = () => Math.PI;
console.log(getPi());

// Large Arrow Function 
const doMath = (x, y, z) => {
    const sum = x + y + z;
    const multi = x * y *z;
    const result = sum + multi;
    return result;
}