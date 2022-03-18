console.log('hello, world');

var h1 = document.querySelector('h1');
console.log('h1 element:', h1);

console.dir(h1);

var idExplanation = document.querySelector('#explanation');
console.log('#explanation:', idExplanation);

console.dir(idExplanation);

var classHint = document.querySelector('.hint');
console.log('.hint:', classHint);

console.dir(classHint);

var pElements = document.querySelectorAll('p');
console.log('p tag NodeList:', pElements);

var classExampleLink = document.querySelectorAll('.example-link');
console.log('.example-link NodeList:', classExampleLink);
