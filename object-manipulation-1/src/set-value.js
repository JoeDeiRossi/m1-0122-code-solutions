/* exported setValue */

// setValue(object, key, value) before:
// define a function named setValue that takes 3 parameters: an object, a key (string), and a value
// use bracket notation to update the value at the given key in the object, or create a property if the key doesn't exist

function setValue(object, key, value) {
  object[key] = value;
}
