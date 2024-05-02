// let firstName = 'Clarissa';
// let lastName = 'Roeder';
// let fullName = firstName + ' ' + lastName;

// // console.log(fullName);
// // console.log(firstName.concat(lastName));
// // console.log(fullName.split(' '));

// let language = 'JavaScript';
// // let idx = language.indexOf('S');
// // let charCode = language.charCodeAt(idx);

// // console.log(idx);
// // console.log(charCode);
// // console.log(String.fromCharCode(charCode));

// let idx = language.lastIndexOf('a');
// // console.log(idx);

// let a = 'a';
// let b = 'b';

// // console.log(a > b);

// b = 'B';

// // console.log(a > b);

// // console.log(language.slice(1, 4));
// // console.log(language.slice(2, 4));

// // console.log(language.substring(1, 4));
// // console.log(language.substring(2, 4));

// // console.log(language.slice(1, -1));
// // console.log(language.slice(2, -1));

// // console.log(language.substring(1, -1));
// // console.log(language.substring(2, -1));

// let fact1 = 'JavaScript is fun';
// let fact2 = 'Kids like it too';
// let compoundSentece = fact1 + ' and ' + fact2[0].toLowerCase() + fact2.slice(1);
// // console.log(compoundSentece);

// // console.log(fact1[0]);
// // console.log(fact2[0]);

// let pi = 22 / 7;
// pi = pi.toString();
// console.log(pi.lastIndexOf('14'));

// let boxNumber = (356).toString();
// console.log(boxNumber);

// boxNumber = parseInt(boxNumber);
// console.log(typeof boxNumber);

// boxNumber = String(boxNumber);
// console.log(typeof boxNumber);

let rlSync = require('readline-sync');
let name = rlSync.question('What is your name?\n');

if (name.endsWith('!')) {
  console.log(`HELLO ${name.slice(0, -1).toUpperCase()}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${name}.`);
}