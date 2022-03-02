/* exported drop */

// before
// define a function named drop that has two parameters, an array and a number
// define a variable named droppedArray and assign it an empty array
// use a for loop to loop through the array using the argument number as a starting index
// push each value from the array into droppedArray
// return droppedArray

function drop(array, count) {
  var droppedArray = [];
  for (let i = count; i < array.length; i++) {
    droppedArray.push(array[i]);
  }
  return droppedArray;
}

// no change
