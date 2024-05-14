function isBlockWord(word) {
  const BLOCKS = [
    { 'B': false, 'O': false },
    { 'X': false, 'K': false },
    { 'D': false, 'Q': false },
    { 'C': false, 'P': false },
    { 'N': false, 'A': false },
    { 'G': false, 'T': false },
    { 'R': false, 'E': false },
    { 'F': false, 'S': false },
    { 'J': false, 'W': false },
    { 'H': false, 'U': false },
    { 'V': false, 'I': false },
    { 'L': false, 'Y': false },
    { 'Z': false, 'M': false },
  ]

  word = word.toUpperCase();
  for (let i = 0; i < word.length; i++) {
    let char = word[i];
    let block = BLOCKS.find(block => block.hasOwnProperty(char));

    if (block[char] === true) {
      return false;
    } else {
      block[char] = true;

      if (Object.values(block).every(value => value)) {
        return false;
      }
    }
  }

  return true;
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BATCHB'));     // false
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true

// * Requirements
// Given a word, return true if the word can be spelled with the letter blocks:
// B:O   X:K   D:Q   C:P   N:A
// G:T   R:E   F:S   J:W   H:U
// V:I   L:Y   Z:M

// The letter blocks include all letters of the alphabet (13 blocks) -> no need to test a word for letters that might not be in a block
// For any given block, only one of the two letters can be used (XOR)
// Any block can only be used once: meaning, any letter can only be used once

// Input: a string
// Output: a boolean
// Letter blocks: array of arrays? objects?

// Validate input?? Assume valid input
// The blocks are a constant? Can i hard code them into any data structure i want?
// Case insensitive

// * Algorithm
// 1. Create array of objects, each containing two key-value pairs with the letters as keys and values set to false
// 2. Convert input to uppercase
// 3. Iterate over the input word:
//    4. Find the object with the current letter
//    5. If false, set to true
//    6. Then check if the other key is set to true or false: if true, return false
//    7. If already true: return false
// 8. Return true
