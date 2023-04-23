// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Tests", () => {
//   it("test", () => {
//     assert.strictEqual(removeExclamationMarks("Hello World!"), "Hello World");
//   });
// });




// my solution
function removeExclamationMarks(s) {
    const sArr = s.split("");
    const result = sArr.filter(string => string !== "!");
    return result.join("");
  }



// arrow function solution
const removeExclamationMarks = s => s.replace(/!/g,"") ;

// split and join
function removeExclamationMarks(s) {
    return s.split('!').join('');
  }