const isLetter = char => /[a-zA-Z]/.test(char);
const isNumber = char => /\d/.test(char);

function swap(string) {
  let letters = string.filter(isLetter);
  let numbers = string.filter(isNumber);

  if (!numbers || !letters) return string;

  let result = string.split('').map((char, index) => {
    if (isNumber(char)) {
      return letters.shift() || char;
    } else if (isLetter(char)) {
      return numbers.shift() || char;
    } else {
      return char;
    }
  }).join('');

  return result;
}

console.log(swap("1a2b3c") === "a1b2c3");       // true
console.log(swap("abcd123") === "123dabc");     // true
console.log(swap("abc1234") === "123abc4");     // true
console.log(swap("a12") === "1a2");             // true
console.log(swap("ab1") === "1ba");             // true
console.log(swap("abc") === "abc");             // true
console.log(swap("123") === "123");             // true
console.log(swap("1") === "1");                 // true
console.log(swap("") === "");                   // true
console.log(swap("123-4a#b$") === "ab3-41#2$")  // true
console.log(swap("ab1CD23") === "12a3DbC");     // true

// * Requirements
// Write a function that given a string returns a new string where 
// all alphabetic characters have replaced numeric ones and vice versa.
// Input: string
// Output string

// Do i need to do any input validation? If so:
// Will the input always be a string? -> yes
// Will the input always contain only numbers and letters? 
//  -> no, non-alphanumerical characters should be left where they are in the string
// What to do if there are no numbers/letters? _> 
// Empty string? -> return empty string
// Ignore additional arguments? -> No additional arguments
// When there are more letters than numbers or vice versa: 
//  -> leave excess letters/numbers where they are in the string
// When there are only letters/numbers -> return string as is
// When string has only one character -> return as is
// The string can contain uppercase letters -> result preserves case

// * Algorithm
// 1. Extract two strings: one only matching numbers, and one matching letters
// 2. Split string into an array of characters and iterate over it:
//    3. If the current character is a number:
//      4. Replace this element with the first element shifted from the letters string
//      5. If the letters string is empty, leave the element as is
//    6. If the current character is a letter:
//      7. Replace this element with the first element shifted from the numbers string
//      8. If the numbers string is empty, leave the element as is
//    9. Leave all other elements as is
// 10. Join the array back together 
// 11. Return the string