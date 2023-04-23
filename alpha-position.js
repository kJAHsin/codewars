// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

// const Test = require('@codewars/test-compat');

// describe("Tests", () => {
//   it("test", () => {
// Test.assertEquals(alphabetPosition("The sunset sets at twelve o' clock."), "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");
// Test.assertEquals(alphabetPosition("The narwhal bacons at midnight."), "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20");
//   });
// });


// my solution
function alphabetPosition(text) {
    const alphaArr = "abcdefghijklmnopqrstuvwxyz".split("");
    const textArr = text.toLowerCase().split("");
    let newArr = [];
    let newString ="";
    textArr.forEach(letter => {
      if (alphaArr.includes(letter)) {
        newArr.push(alphaArr.indexOf(letter) + 1);
      }
      newString = newArr.join(" ");
    })
    return newString;
}
  

  
