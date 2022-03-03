// for loop
for (let i = 0; i < 10; i++) {
  console.log('in loop:',i);
}
console.log('loop done');

const names = ['shaun', 'ryu', 'chun-li'];

for (let i = 0; i < names.length; i++) {
    // console.log(names[i]);
    
    // result in console:
    let html = `<div>${names[i]}</div>`;
    console.log(html);
}
