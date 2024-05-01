function isAnagramOf(word, candidate) {
  if (word.length !== candidate.length) {
    return false;
  }

  let wordChars = word.split('').sort();
  let candidateChars = candidate.split('').sort();

  return wordChars.every((char, index) => char === candidateChars[index]);
}

function anagram(word, list) {
  return list.filter(candidate => isAnagramOf(word, candidate));
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));   // [ "enlist", "inlets" ]