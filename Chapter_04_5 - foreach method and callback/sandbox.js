// callbacks and foreach
// example 1
console.log("Example 1");
const myFunc = (callbackFunc) => {
    let value = 50;
    callbackFunc(value);
};

myFunc(function (value) {
    console.log(value)
});

// example 2
console.log("Example 2");
const talk = function (fx) {
    fx();
}

let sayHi = function () {
    console.log('Hi');
}
talk(sayHi);

// example 3
console.log("Example 3");
let calc = function (fx, a, b) {
    return fx(a, b)
};

let sum = function (a,b) {
    return a + b;
};

let diff = function(a,b){
    return a-b;
};

console.log(calc(sum, 4, 5));
console.log(calc(diff, 4, 5));

/*
example 4
console.log("Example 4");
function showLoadingScreen(){
    console.log("1 Loading Screen Appeared");
}
function hideLoadingScreen(){
    console.log("4 Loading Screen Hidden");
}
function getDataFromAPI(){
    console.log("2 start pulling data");
    setTimeout(()=>{
        console.log("3 Finished pulling data");
    },2000);
}
showLoadingScreen();
getDataFromAPI();
hideLoadingScreen();

output:
1 Loading Screen Appeared
2 start pulling data
4 Loading Screen Hidden
3 Finished pulling data

// fixing example 4

console.log("Fixing Example 4");
function showLoadingScreen2(){
    console.log("1 Loading Screen Appeared");
}
function hideLoadingScreen2(){
    console.log("4 Loading Screen Hidden");
}
function getDataFromAPI2(callback2){
    console.log("2 start pulling data");
    setTimeout(()=>{
        console.log("3 Finished pulling data");
        callback2();
    },2000);
}
showLoadingScreen2();
getDataFromAPI2(hideLoadingScreen2);
*/

// foreach
// Foreach example 1
console.log("Foreach example 1");
let peoplee = ['mario','luigi','ryu','shaun','chun-li'];

peoplee.forEach(function(){
    console.log("something");
});

// Foreach example 2
console.log("Foreach example 2");
let people = ['mario','luigi','ryu','shaun','chun-li'];

people.forEach(function(person){
    console.log(person);
});

// example 2 Samething with arrow function
console.log("example 2 Samething with arrow function");

let peoples = ['mario','luigi','ryu','shaun','chun-li'];

peoples.forEach((person)=>{
    console.log(person);
});

// Foreach example 3 with index
console.log("Foreach example 3 with index");
let peopless = ['mario','luigi','ryu','shaun','chun-li'];

peoples.forEach((person,index)=>{
    console.log(index,person);
});

// Foreach example 4 sepating function then push it to forech
console.log("Foreach example 4 sepating function then push it to forech");
let peoplesss = ['mario','luigi','ryu','shaun','chun-li'];
const logPerson=(person,index)=>{
    console.log(`${index} - hello ${person}`);
};

peoplesss.forEach(logPerson);