/* exported pick */

// before
// define a function that has two parameters, an object and an array of strings
// define a variable named returnObject and assign it an empty object
// use a for loop to loop through the argument array
// use an if statement to check if the argument object has a key that matches the current string
// if true, create a property on returnObject that matches the property of the argument object
// after the loop, return returnObject

function pick(source, keys) {
  var returnObject = {};
  for (let i = 0; i < keys.length; i++) {
    const currentKey = keys[i];
    if (Object.prototype.hasOwnProperty.call(source, currentKey) && source[currentKey] !== undefined) {
      returnObject[currentKey] = source[currentKey];
    }
  }
  return returnObject;
}

// after
// define a function named pick that has two parameters, an object and an array of strings
// define a variable named returnObject and assign it an empty object
// use a for loop to loop through the argument array
// define a variable named currentKey and assign it the value of keys at i
// use an if statement to check if the argument object has a key that matches the current string AND its value is defined
// if true, create a property on returnObject that matches the property of the argument object
// after the loop, return returnObject
