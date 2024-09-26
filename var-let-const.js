// var: No Reason To Use Var
// let: Allow It To Reassign 
// const: Do Not Allow It To Reassign

const money = 25;
// money = 50;
const rich = money + 25;
console.log(rich);

let count = 0;
count += 10;
console.log(count);

const numbers = [23, 45, 65, 33, 69, 20];
// numbers = [5, 10, 15, 20, 25, 30];
numbers[1] = 55;
numbers.push(40, 88, 56);
console.log(numbers);

// Object 
const student = {
    name: "SKJ",
    class: 12
};

// student = {name: "Doe"};
student.name = "Doe";
console.log(student);

// Loop 
// const sum = 0;
let sum = 0;
for (let i = 0; i < 10; i++) {
    const num = i;
    sum += num;
}