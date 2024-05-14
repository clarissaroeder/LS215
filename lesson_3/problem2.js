function luhn(string) {
  let numberString = string.replace(/\D/g, '');

  if (!numberString) {
    return false;
  }

  let numbers = numberString.split('').map(Number).reverse();
  let checksum = 0;

  numbers.forEach((number, index) => {
    if (index % 2 === 1) {
      number *= 2;

      if (number >= 10) {
        number -= 9;
      }
    }

    checksum += number;
  });

  if (checksum % 10 === 0) {
    return true;
  } else {
    return false;
  }
}

function addCheckDigit(string) {
  if (luhn(string)) {
    return string;
  } 

  let numberString = string.replace(/\D/g, '') + '0';
  let numbers = numberString.split('').map(Number).reverse();
  let checksum = 0;

  numbers.forEach((number, index) => {
    if (index % 2 === 1) {
      number *= 2;

      if (number >= 10) {
        number -= 9;
      }
    }

    checksum += number;
  });

  let missingDigit = String(10 - (checksum % 10));
  
  return string + missingDigit;
}

//* Luhns Algorithm
// Counting from the rightmost digit moving left: double every second digits value
//    If that value is 10 or more, subtract 9
// Add all the digits together
// If the sum ends in 0, the number is valid -> sum % 10 === 0


//* Requirements
// Ignore non-numeric characters
// Empty String as input?? -> return false
// String that doesn't contain any digits?? -> return false
// What to do with additional arguments?


//* Algorithm
// 1. Clean numberString from any non-numeric characters
// 2. Split numberString into an array of digits
// 3. Convert each digitString to a number
// 4. Reverse the array
// 5. Iterate over the array and transform: for all odd indexes:
//    Double the number
//    If the doubled value is higher or equal to 10, subtract 9
// 6. Sum all the values in the array together
// 7. Check if the last digit is 0

//* Part 2
// Write a function that can add a check digit to make a number valid per Luhn,
// and return the new number plus that digit (as a string)
// "2323 2005 7766 335" => "2323 2005 7766 3354"

// Input: number string
// If the input is valid, return input unchanged
// If not valid:
//    find the digit that makes it valid
//    append that digit to the string


// this changes the order things are doubled in as well -> instead, now the even integers should be doubled
// append 0 to the string -> won't affect the sum, but will change the doubling order
console.log(addCheckDigit("2323 2005 7766 355"));
console.log(addCheckDigit("1111"));