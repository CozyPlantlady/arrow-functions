/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function

function addTwoNumbers(a, b) {
    return a + b;
}
let sum = addTwoNumbers(3, 5);

console.log(sum);

// Arrow Function With Parameters

const addTwoNumbers2 = (a, b) => {
    return a + b;
}
let sum2 = addTwoNumbers2(3, 5);

console.log(sum);
// Single Line Arrow Function With Parameters

const addTwoNumbers3 = (a, b) =>  a + b;

const addTwoNumbers4 = (a, b) =>  (a + b);

// Implicit Returns

const saySomething = message => console.log(message)
saySomething('Hello there!')

const sayHello = () => console.log('hello')
sayHello();


// Returning Multiple Lines

const returnMultipleLines = () => (
    `<p>
    This is multiline string!
    </p>`
)
console.log(returnMultipleLines());