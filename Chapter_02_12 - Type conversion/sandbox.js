// type conversion
// // String to Number
let score = '100';
console.log(score, typeof score);
score = Number(score);
console.log(score, typeof score);

let result = Number('hello');
console.log(result);

// Number to String
let score2 = String(100);
console.log(score2, typeof score2);

// positive and negative numbers are true in boolean but 0 is false
let score3 = Boolean(100);
console.log(score3);

let score4 = Boolean(-100);
console.log(score4);

let score5 = Boolean(0);
console.log(score5);

// string boolean is true in boolean but empty string is false
let score6 = Boolean('hello');
console.log(score6);

let score7 = Boolean('');
console.log(score7);

