/**
 * * ------- Common Keys -------
 * * \n ==> New Line
 * * ` ` ==> Backtick
 * * ' ' ==> Single Quote
 * * " " ==> Double Quote
 * * / ==> Forward Slash
 * * \ ==> Backward Slash
 * * ; ==> Semicolon
 */

const first = "Sheikh";
const middle = "Jabed";
const last = "Apu";

const fullName = first + " " + middle + " " + last;

console.log(fullName);


const a = 20;
const b = 30;

const result = "The sum of " + a + " and " + b + " is: " + (a + b);

console.log(result);

const math = `The sum of ${a} and ${b} is: ${a + b}`
console.log(math);


const numbers = [22, 34, 46, 58, 70];
const player = {name: "ABD", age: 38}

const sum = `The sum of ${numbers[0]} and ${player.age} is ${numbers[0] + player.age}`

console.log(sum);


const dialogue = "Rock: Hi John, How are you? \n" +
"John: Hey, I am fine. What about you? \n" +
"Rock: I am also fine. Let's play a WWE match. \n" + 
"John: No, I am not interested to play with you. \n" +
"Rock: OK, bye bye"

console.log(dialogue);


const secondDialogue = `
Rock: Hi John, How are you?"
"John: Hey, I am fine. What about you?"
"Rock: I am also fine. Let's play a WWE match." 
"John: No, I am not interested to play with you."
"Rock: OK, bye bye.
`

console.log(secondDialogue);
