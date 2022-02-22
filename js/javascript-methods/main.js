// the Math object

var num1 = 52;
var num2 = 31;
var num3 = 687;

var maximumValue = Math.max(num1, num2, num3);
console.log('value of maximumValue:', maximumValue);

var heroes = ['Wolverine', 'Spider-Man', 'Batman', 'Booster Gold'];
var randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('value of randomIndex:', randomIndex);

var randomHero = heroes[randomIndex];
console.log('value of randomHero:', randomHero);

// array methods

var library = [
  {
    title: 'Playing for Keeps',
    author: 'David Halberstam'
  },
  {
    title: 'Golden: The Miraculous Rise of Steph Curry',
    author: 'Marcus Thompson II'
  },
  {
    title: 'Hannibal Rising',
    author: 'Thomas Harris'
  }
];

var lastBook = library.pop();
console.log('value of lastBook:', lastBook);

var firstBook = library.shift();
console.log('value of firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('value of library after push/unshift/splice:', library);

// string methods

var fullName = 'Joe Dei Rossi';
var firstAndLastName = fullName.split(' ');
console.log('value of firstAndLastName:', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('value of sayMyName:', sayMyName);
