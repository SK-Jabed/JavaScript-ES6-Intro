const player = {
    name: "ABD",
    age: 38,
    phone: "+08237729298",
    money: 20000000
}

// If Right Side is an Object, Then Left of Destructuring Will Be Object As Well
// Use Property Name As a Variable That Contains The Property Value
// const {phone, age} = player;
const {phone, age: boyos} = player;


// const phone = player.phone;
// const name = player.name;
// const age = player.age;

console.log(phone);
console.log(phone);

console.log(boyos);
console.log(boyos);


// Array Destructuring
const numbers = [22, 24,];
const [first, second] = numbers;
const [x, y] = [12, 14];


function doubleThem(a,b) {
    return [a * 2, b * 2];
}

const [prothom, ditiyo] = doubleThem(6, 9);
console.log(prothom, ditiyo);