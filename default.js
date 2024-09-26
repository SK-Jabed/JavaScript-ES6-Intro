// Default: If Value is Not Provided, Take This as a Default
function add(num1 = 6, num2 = 8) {
    const result = num1 + num2;
    console.log(num1, num2, result);
    return result;
}

// const sum = add(6, 8);
// const sum = add(6);
const sum = add();


function fullName(first, last = "") {
    const full = first + " " + last;
    return full;
}

// console.log(fullName("Sheikh Jabed"));
console.log(fullName("Sheikh", "Jabed"));


function friends(names = []) {

}

function person(human = {}) {
    
}

