// Impure ex:1
const array = [1, 2, 3];
/*
function addElementToArray2(element){
    array.push(element)
}

addElementToArray2(4)
console.log(`impure ex 1 : ${array}`);

// Impure ex:2

function addElementToArray(a,element){
    a.push(element)
}
addElementToArray(array,4)
console.log(`impure ex 2 : ${array}`);

function addElementToArray(a, element) {
    return [...a, element,Math.random()];
}
impure = addElementToArray(array, 4);
console.log(`impure ex 1 : ${array}`);
console.log(impure);
*/

// Pure ex:1

function addElementToArray(a, element) {
    return [...a, element];
}
pure = addElementToArray(array, 4);
console.log(`pure ex 1 : ${array}`);
console.log(pure);