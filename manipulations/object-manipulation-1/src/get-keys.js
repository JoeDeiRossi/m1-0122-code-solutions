/* exported getKeys */

// getKeys(object) before:
// define a function named getKeys that takes 1 parameter, an object
// define a variable named keyArray and assign it an empty array;
// use a for/in loop to loop through the properties of the object
// push each of the object's keys into keyArray
// return keyArray

function getKeys(object) {
  var keyArray = [];
  for (var key in object) {
    keyArray.push(key);
  }
  return keyArray;
}

// no change
