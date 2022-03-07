/* exported equal */

// before
// define a function named equal that has two parameters, two arrays
// use a for loop to loop through the first array
// use an if statement to check if the items at the current index of each array are the same
// if false, return false
// after the loop, return true

function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  for (let i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
}

// after
// define a function named equal that has two parameters, two arrays
// use an if statement to check if the arrays are not the same length
// if true, return false
// use a for loop to loop through the first array
// use an if statement to check if the items at the current index of each array are not the same
// if true, return false
// after the loop, return true
