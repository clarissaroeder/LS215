function octalToDecimal(numberString) {
  let octalNumbers = numberString.split('').reverse().map(char => parseInt(char));

  let DecimalNumbers = octalNumbers.map( (number, index) => {
    let decimal = (number * Math.pow(8, index));
    return decimal;
  })


  return DecimalNumbers.reduce((sum, number) => sum + number );
}

console.log(`result: ${octalToDecimal('1')}`);           // 1
console.log(`result: ${octalToDecimal('10')}`);          // 8
console.log(`result: ${octalToDecimal('130')}`);         // 88
console.log(`result: ${octalToDecimal('17')}`);          // 15
console.log(`result: ${octalToDecimal('2047')}`);        // 1063
console.log(`result: ${octalToDecimal('011')}`);         // 9