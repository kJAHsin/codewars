// We need a function that can transform a number (integer) into a string.

// What ways of achieving this do you know?

// Examples (input --> output):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"

// const assert = require('chai').assert;
// describe("Tests", () => {
//   it("test", () => {
//     assert.strictEqual(numberToString(67), '67');
//   });
// });



// my solution
function numberToString(num) {
    return `${num}`
}


// arrow function
const numberToString = num => `${num}`;

const numberToString = num => String(num)

// super simple
numberToString = String;
