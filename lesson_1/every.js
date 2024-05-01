function myOwnEvery(array, func) {
  array.forEach(element => {
    if (!func(element)) {
      return false;
    }
  } 
  )

  return true;
}

let isAString = value => typeof value === 'string';
console.log(myOwnEvery(['a', 'a234', '1abc'], isAString));       // true