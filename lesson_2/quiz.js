function foo(list) {
  return list.map(function (word) {
      // console.log(word.match(/[aeiou]/i));
      return word.match(/[aeiou]/gi) || [];
    }).reduce(function (acc, letterList) {
      console.log(letterList);
      console.log(letterList.length);
      return acc + letterList.length;
    }, 0);
}

console.log(foo(['cart', 'truck', 'cart', 'train']));
// console.log(foo(['apple', 'banana', 'orange']));