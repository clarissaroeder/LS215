function encode(string, rails) {
  const FILLER = "."

  if (rails === 1 || rails >= string.length || !string) {
    return string;
  }

  let fence = [];
  for (let i = 0; i < rails; i++) {
    fence.push([]);
  }

  string = string.replace(/\s/g, '').toUpperCase().split('');

  let row = 0;
  let increment = true;

  string.forEach((char) => {
    for (let i = 0; i < fence.length; i++) {
      if (row === i) {
        fence[i].push(char);
      } else {
        fence[i].push(FILLER);
      }
    }

    if (increment && row === rails - 1) {
      increment = false;
    } else if (!increment && row === 0) {
      increment = true;
    }

    if (increment) {
      row++;
    } else {
      row--;
    }
  });

  fence = fence.map(row => row.join('').replace(/[.]/g, '')).join('');

  return fence;
}

function transpose(array) {
  let transposed = [];

  for (let col = 0; col < array[0].length; col++) {
    transposed.push([]);
    for (let row = 0; row < array.length; row++) {
      transposed[col][row] = array[row][col];
    }
  }

  return transposed;
}

function decode(string, rails) {
  const FILLER = ".";
  const PLACEHOLDER = "?";

  if (rails === 1 || rails >= string.length || !string) {
    return string;
  }

  let fence = [];
  for (let i = 0; i < rails; i++) {
    fence.push([]);
  }

  let row = 0;
  let increment = true;

  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < fence.length; j++) {
      if (row === j) {
        fence[j].push(PLACEHOLDER);
      } else {
        fence[j].push(FILLER);
      }
    }

    if (increment && row === rails - 1) {
      increment = false;
    } else if (!increment && row === 0) {
      increment = true;
    }

    if (increment) {
      row++;
    } else {
      row--;
    }
  }

  let chars = string.split('');
  fence = fence.map(row => {
    return row.map(element => {
      return element === FILLER ? FILLER : chars.shift();
    })
  })

  fence = transpose(fence);
  fence = fence.map(row => row.join('').replace(/[.]/g, '')).join('');

  return fence;
}

// Test cases:
// console.log(encode('WE ARE DISCOVERED FLEE AT ONCE', 3)); // WECRLTEERDSOEEFEAOCAIVDEN
// console.log(encode('Hello world', 4));                    // HOEWRLOLLD
// console.log(encode('Hi', 3));                             // Hi
// console.log(encode('WE ARE DISCOVERED', 1));              // WE ARE DISCOVERED
// console.log(encode('', 2));                               // ''

console.log(decode('WECRLTEERDSOEEFEAOCAIVDEN', 3)); // WEAREDISCOVEREDFLEEATONCE
console.log(decode('HOEWRLOLLD', 4));               // HELLOWORLD
console.log(decode('Hi', 1));                        // Hi
console.log(decode('WWECRLTEERDSOEEFEAOCAIVDEN', 1)) // WECRLTEERDSOEEFEAOCAIVDEN
console.log(decode('', 2));                          // ''

// * Requirements: Rail Fence Cipher
// Encode: Given a string, and a number of 'rails', encode the string 
// Input validation? All letters?

// Example: 3 rails, "WE ARE DISCOVERED FLEE AT ONCE":
// The cipherer writes out the rails 
// W . . . E . . . C . . . R . . . L . . . T . . . E
// . E . R . D . S . O . E . E . F . E . A . O . C .
// . . A . . . I . . . V . . . D . . . E . . . N . .
// Output (read off in rows): WECRLTEERDSOEEFEAOCAIVDEN

// Example: "Hello world", 4
// H . . . . . o . . .
// . e . . . w . r . .
// . . l . o . . . l .
// . . . l . . . . . d
// Output: Hoewrlolld

// Edgecases:
// If there are more rails than letters, return string
// If there is only one rail, return string

// Data structure: matrix
// Spaces don't count
// Don't have to preserve the case

// * Algorithm
// 1. Remove spaces from string, and split into an array of characters
// 2. Initialise the fence matrix: an array of n (rail number) empty arrays
// 3. If the number of rails is 1 or is larger than string length, return string
// 4. Iterate over the array of characters:
//    5. Place the current character on the relevant row, and fill the others up with "."
//        - Define a row variable (outside of loop) and set to 0 initially
//        - Set increment variable to true
//        - Iterate over the fence: if i === row, append character, else "."
//        - Increment row by 1 
//        - If row === rails - 1: from then on, decrement by 1 until row === 0
//    6. If the last row is reached, work backwards up until row 0 is reached
// 9. Return result string

// Decode: Given an encoded string, a number of 'rails', decode the string

// * Algorithm
// 1. Make a matrix of the zig zag shape with a placeholder for where the characters go
// 2. Iterate over the matrix:
//    3. Iterate over each row: shift first character from string and add in place of placeholder
// 4. Transpose the matrix
// 5. Delete Fillers and join together to string and return
