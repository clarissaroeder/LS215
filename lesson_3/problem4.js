function fillNumber(current, previous, result) {
  // console.log(`current: ${current}`);
  // console.log(`previous element: ${previous}`);

  let start = previous;

  if ((/[-]/).test(current)) {
    current = current.replace('-', '');

    while (!start.toString().endsWith(current)) {
      result.push(++start);
    }
  } else {
    while (!start.toString().endsWith(current)) {
      start++;
    }

    result.push(start);
  }

}

function completeNumbers(string) {  
  string = string.replace(/(:)|(\.\.)/g, "-");
  let elements = string.match(/[-]*[\d]+/g);
  // console.log(`elements: ${elements}`);

  let result = [];
  result.push(Number(elements[0]));
  
  for (let i = 1; i < elements.length; i++) {
    fillNumber(elements[i], result.at(-1), result);
  }

  return result;
}

console.log(completeNumbers("1, 3, 7, 2, 4, 1"));  // --> 1, 3, 7, 12, 14, 21
console.log(completeNumbers("1, 3, 7, 2, 4, 01")); // --> 1, 3, 7, 12, 14, 101
console.log(completeNumbers("1-3, 1-2"));          // --> 1, 2, 3, 11, 12
console.log(completeNumbers("1:5:2"));             // --> 1, 2, 3, 4, 5, 6, ... 12
console.log(completeNumbers("1-5:2"));             // --> 1, 2, 3, 4, 5, 6, ... 12
console.log(completeNumbers("104..2"));             // --> 104, 105, ... 112
console.log(completeNumbers("104-02"));            // --> 104, 105, ... 202
console.log(completeNumbers("545, 64:11"));        // --> 545, 564, 565, .. 611
console.log(completeNumbers("1-5, 4"));            // --> 1, 2, 3, 4, 5, 14 

// * Requirements:
// Input: a list of numbers in a short-hand range -> String of digits/ranges, separated by comma
//    Only the significant part of the next number is written:
//    If the next number is one digit, its 10 larger than the prior 10th
//    If the next number is two digits, its 100 larger than the prior 100th
//    ==> The number needs to increase until the string representation ends with the significant part
// Output: array of numbers
// Range separators are: '-', '..', ':'
// Range limits are always inclusive
// Expand the ranges
// Complete the numbers
// Can assume inputs will be valid

// * Algorithm
// 1. Make ranges uniform: select one separator and replace the others with it ('-')
// 2. Split the string into elements of digits: keep the range separator with the second element to identify a range
// 3. Add the first element to the result array
// 4. For each of the remaining numbers: fill(current, previous (result.at(-1)), result)
//    5. If an end of range:
//        6. Remove the range identifier
//        7. Set start to previous (a number)
//        8. While previous.toString() doesn't end with the current number
//            9. Add plus 1 to start
//            10. Push this number to the result array
//    11. If a number:
//        12. Set start to previous (a number)
//        13. While previous.toString() doesn't end with the current number, increase start by plus 1
//        14. Afterwards, add start to result array
// 15. Return result array

