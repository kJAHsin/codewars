// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(reverseWords('The quick brown fox jumps over the lazy dog.'), 'ehT kciuq nworb xof spmuj revo eht yzal .god');
//     assert.strictEqual(reverseWords('apple'), 'elppa');
//     assert.strictEqual(reverseWords('a b c d'), 'a b c d');
//     assert.strictEqual(reverseWords('double  spaced  words'), 'elbuod  decaps  sdrow');
//   });
// });

function reverseWords(str) {
  let strArr = str.split(" ");
  let newArr = [];
  for (let i = 0; i < strArr.length; i++) {
    let wordArr = strArr[i].split("").reverse().join("");
    strArr[i] = wordArr;
    newArr.push(strArr[i]);
  }
  return newArr.join(" ");
}