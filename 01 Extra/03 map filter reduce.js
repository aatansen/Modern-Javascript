// understanding map:
const arr = [2, 5, 4, 7, 9, 10];
function double(x) {
    return x * 2;
}

function binary(x) {
    return x.toString(2);
}
const double_output = arr.map(double); //in one line : const double_output = arr.map((x)=>x*2);
const binary_output = arr.map(binary); //in one line : const binary_output = arr.map((x)=>x.toString(2));
console.log(double_output);
console.log(binary_output);

// understanding filter:
function isOdd(x) {
    return x % 2;
}

const isOdd_output = arr.filter(isOdd); // in one line : const isOdd_output = arr.filter((x)=>x%2);
console.log(isOdd_output);


// understanding reduce:
// normal sum :
function findsum(x) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];

    }
    return sum;
}

console.log(findsum(arr));

// using reduce:

const sum_output = arr.reduce(function (acc, curr) {
    acc = acc + curr;
    return acc;
}, 0)
console.log(sum_output);

// max value:
const max_output = arr.reduce(function (acc, curr) {
    if (acc < curr) {
        acc = curr;

    }
    return acc;

}, 0)
console.log(max_output);