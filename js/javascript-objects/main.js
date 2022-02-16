
var student = {
  firstName: 'Joe',
  lastName: 'Dei Rossi',
  age: 28
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);
student.livesInIrvine = false;
student.previousOccupation = 'Red Bull Sales Rep';
console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);

var vehicle = {
  make: 'Hyundai',
  model: 'Kona',
  year: 2019
};

vehicle['color'] = 'black';
vehicle['isConvertible'] = false;
console.log('value of vehicle["color"]:', vehicle['color']);
console.log('value of vehicle["isConvertible"]:', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

var pet = {
  name: 'Chester',
  type: 'Komodo Dragon'
};

delete pet.name;
delete pet.type;
console.log('value of pet:', pet);
