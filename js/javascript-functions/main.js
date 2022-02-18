function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}

var convertMinutesToSecondsResult = convertMinutesToSeconds(5);
console.log('convertMinutesToSeconds result:', convertMinutesToSecondsResult);

function greet(name) {
  return 'Hey, ' + name;
}

var greetResult = greet('Crabman');
console.log('greet result:', greetResult);

function getArea(width, height) {
  return width * height;
}

var getAreaResult = getArea(8, 24);
console.log('getArea result:', getAreaResult);

function getFirstName(person) {
  return person.firstName;
}

var examplePerson = { firstName: 'Billy', lastName: 'Crystal' };
var getFirstNameResult = getFirstName(examplePerson);
console.log('getFirstName result:', getFirstNameResult);

function getLastElement(array) {
  var lastElement = array[array.length - 1];
  return lastElement;
}

var exampleArray = ['first', 'second', 'third', 'last'];
var getLastElementResult = getLastElement(exampleArray);
console.log('getLastElement result:', getLastElementResult);
