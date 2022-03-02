/* exported take */

// before
// define a function named take with two parameters, an array and a number
// define a variable named takenArray and assign it an empty array
// use a for loop to loop through the argument array
// loop x times, the second argument of the function
// push the value from array into takenArray
// return takenArray

function take(array, count) {
  var takenArray = [];
  if (array.length > 0) {
    for (let i = 0; i < count; i++) {
      takenArray.push(array[i]);
    }
  }
  return takenArray;
}

// after
// define a function named take with two parameters, an array and a number
// define a variable named takenArray and assign it an empty array
// use an if statement to check if the array has at least one item in it
// if true, use a for loop to loop through the argument array
// loop x times, the second argument of the function
// push the value from array into takenArray
// return takenArray outside of both the loop and conditional
