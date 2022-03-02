/* exported includes */

// before
// define a function named includes that has two parametes, an array and a value to search for
// use a for loop to loop through the array
// check each value; if it matches the argument value, return true
// after the loop, return false

function includes(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
