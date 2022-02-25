let ninjas = ['shaun', 'ryu', 'chun-li'];
console.log(ninjas);
console.log(ninjas[1]);
ninjas[1] = 'ken';
console.log(ninjas);

let ages = [20, 25, 30, 35];
console.log(ages);
console.log(ages[1]);
ages[1] = 21;
console.log(ages);

let random = ['shaun', 'ryu', 'chun-li', 20, 25, 30, 35];
console.log(random);

console.log(random.length);

// array methods->
// push - add to the end of the array
let result1 = ninjas.push('ken');
console.log(ninjas);

// pop - remove from the end of the array
let result2 = ninjas.pop();
console.log(ninjas);

// join - convert to string
let result3 = ninjas.join(', ');
console.log(result3);

//indexOf - find the index of an element
let result4 = ninjas.indexOf('chun-li');
console.log(result4);

// concat - combine two arrays
let result5 = ninjas.concat(ages);
console.log(result5);

// shift - remove from the beginning of the array
// unshift - add to the beginning of the array
// splice - remove from the middle of the array
// slice - copy an array

// reverse - reverse the order of the array
// sort - sort the array
// forEach - loop through the array
// map - loop through the array and return a new array
// filter - loop through the array and return a new array
// reduce - loop through the array and return a single value




