/* exported tail */

// tail(array) before:
// define a function named tail that takes one parameter, an array
// define a variable named resultArray and assign it an empty array
// use a for loop with i = 1 to push each array item into resultArray
// return resultArray

function tail(array) {
  var resultArray = [];
  for (let i = 1; i < array.length; i++) {
    resultArray.push(array[i]);
  }
  return resultArray;
}

// tail(array) after:
// define a function named tail that takes one parameter, an array
// define a variable named resultArray and assign it an empty array
// use a for loop with i = 1 to loop through array
// push each array item into resultArray
// return resultArray
