const title = 'Best reads of 2022';
const author = 'Ray Bradbury';
const likes = 100;

// concatenation way 
let result1 = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';
console.log(result1);

// template string way
let result2 = `The blog called ${title} by ${author} has ${likes} likes`;
console.log(result2);

//creating html templates
let html = `
    <h2>${title}</h2>
    <p>By ${author}</p>
    <span>This blog has ${likes}</>
    `;
console.log(html);