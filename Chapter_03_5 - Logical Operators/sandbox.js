// logical operators are used to combine conditions - OR || AND && NOT !
const password = 'hellodwdwf';
if (password.length >= 4 && password.includes('@')) {
    console.log('that is a long password');
}else if (password.length >= 8 || password.includes('@')){
    console.log('that is a very long password');
}else {
    console.log('that is a short password');
}


let user = false;
if (!user){
    console.log('show something');
}

