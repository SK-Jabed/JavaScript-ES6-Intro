const glass = {
    name: "glass",
    color: "Golden",
    price: 12,
    isCleaned: true
}

console.log(glass);

const keys = Object.keys(glass);
console.log(keys);
// [ 'name', 'color', 'price', 'isCleaned' ]

const values = Object.values(glass);
console.log(values);
// [ 'glass', 'Golden', 12, true ]

const entries = Object.entries(glass);
console.log(entries);
// ----- Array of Array or Two Dimensional Array -----
// [
//     [ 'name', 'glass' ],
//     [ 'color', 'Golden' ],
//     [ 'price', 12 ],
//     [ 'isCleaned', true ]
// ]

console.log(glass);
delete glass.isCleaned;
console.log(glass);


const {isCleaned, ...shortGlass} = glass;
console.log(shortGlass);


// Freeze and Seal
// Object.freeze(glass);
Object.seal(glass);
glass.source = "Bangladesh";
glass.price = 50;
delete glass.name;
console.log(glass);