function cleanUp(number) {
  const badNumber = '0000000000';

  if (!number) {
    return badNumber;
  }

  let digits = number.match(/\d/g).join('');

  if (digits.length === 10) {
    return digits;
  } else if (digits.length === 11 && digits[0] === '1') {
    return digits.slice(1);
  } else {
    return badNumber;
  }
}

console.log(cleanUp(''));                            // 0000000000
console.log(cleanUp('111'));                         // 0000000000
console.log(cleanUp('1111111111'));                  // 1111111111
console.log(cleanUp('12222222222'));                 // 2222222222
console.log(cleanUp('22222222222'));                 // 0000000000
console.log(cleanUp('111111111111'));                // 0000000000
console.log(cleanUp('23(0-899-128-1sjd'));           // 2308991281
console.log(cleanUp('    23(0-899   -128-1sjd'));    // 2308991281