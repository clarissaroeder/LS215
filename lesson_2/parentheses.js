function isBalanced(string) {
  let parentheses = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === '(') {
      parentheses++;
    } else if (string[i] === ')') {
      parentheses--;
    }

    if (parentheses < 0) {
      return false;
    }
  }

  return (parentheses === 0);
}

console.log(isBalanced('What (is) this?'));        // true
console.log(isBalanced('What is) this?'));         // false
console.log(isBalanced('What (is this?'));         // false
console.log(isBalanced('((What) (is this))?'));    // true
console.log(isBalanced('((What)) (is this))?'));   // false
console.log(isBalanced('Hey!'));                   // true
console.log(isBalanced(')Hey!('));                 // false
console.log(isBalanced('What ((is))) up('));       // false