/* exported omit */

// before
// define a function named omit that has two parameters, an object and an arry of strings
// define a variable named returnObject and assign it an empty object
// use a for/in loop to loop through the source object
// for each key, use .includes() to see if the keys array contains that key
// if false, create a property on returnObject that matches the current property of the argument object
// after the loop, return returnObject

function omit(source, keys) {
  var returnObject = {};
  for (var key in source) {
    if (!keys.includes(key)) {
      returnObject[key] = source[key];
    }
  }
  return returnObject;
}
