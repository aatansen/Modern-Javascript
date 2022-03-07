// variables & block scope
let age = 20;
if (true) {
    let age = 40;
    let names = 'Tansen';
    console.log('inside 1st code block:', age,names);

    if (true) {
        console.log('inside 2nd code block:', age,names);
    }
}
console.log('outside code block:', age,names);