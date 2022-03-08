// regular function
const calcArea = function(radius){
    return 3.14 * radius ** 2;
};
// arrow function
const calcArea2 = (radius) => {
    return 3.14 * radius ** 2;
};
// simple arrow function
const calcArea3 = radius => 3.14 * radius ** 2;

const area = calcArea(5);
console.log('regular function area is:',area);

const area2 = calcArea2(5);
console.log('arrow function area is:',area2);

const area3 = calcArea3(5);
console.log('simple arrow function area is:',area3);

// regular function to arrow function:

// regular function
const greet = function(){
    return 'hello normal function';
};
// arrow function
const greet2 = ()=> 'Hello arrow function';

console.log(greet());
console.log(greet2());

// simple calculation with normal function:
const bill = function(products,tax){
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += (products[i]+ (products[i] * tax));
    }
    return total;
};
console.log('simple calculation with normal function',bill([10,15,30],0.2));

// simple calculation with arrow function:
const bill2 = (products,tax) => {
    let total=0;
    for (let i = 0; i < products.length; i++) {
        total += (products[i]+ (products[i] * tax));
    }
    return total;
};
console.log('simple calculation with arrow function:',bill([10,15,30],0.2));