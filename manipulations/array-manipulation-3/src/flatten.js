/* exported flatten */

// before
// define a function named flatten that has one parameter, an array
// define a variable named finalArray and assign it an empty array
// use a for loop to loop through the argument array
// for each item in the array, use Array.isArray to check if the item is an array
// if true, loop through the subarray, pushing each item into finalArray
// else, push any item that's not an array into finalArray
// after the loop, return finalArray

function flatten(array) {
  var finalArray = [];
  for (let i = 0; i < array.length; i++) {
    const currentItem = array[i];
    if (Array.isArray(currentItem)) {
      for (let j = 0; j < currentItem.length; j++) {
        finalArray.push(currentItem[j]);
      }
    } else {
      finalArray.push(currentItem);
    }
  }
  return finalArray;
}

// after
// define a function named flatten that has one parameter, an array
// define a variable named finalArray and assign it an empty array
// use a for loop to loop through the argument array
// define a variable named currentItem and assign it the value of the array at the current index
// for each item in the array, use Array.isArray to check if the item is an array
// if true, loop through the subarray, pushing each item into finalArray
// else, push any item that's not an array into finalArray
// after the loop, return finalArray
