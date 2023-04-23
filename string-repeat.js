// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"


// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Tests", function() {
//   it ("Basic tests", function() {
//     assert.strictEqual(repeatStr(3, "*"), "***");
//     assert.strictEqual(repeatStr(5, "#"), "#####");
//     assert.strictEqual(repeatStr(2, "ha "), "ha ha ");
//   });
// });



// my solution
function repeatStr (n, s) {
    let newS = "";
    for (let i = 0; i < n; ++i) {
      newS += s;
    }
    return newS;
  }


// arrow function with repeat
repeatStr = (n, s) => s.repeat(n)

// not repeat
const repeatStr = function (n, s) { return Array(n).join(s) + s}