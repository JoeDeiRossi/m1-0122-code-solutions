/* exported zip */

// before
// define a function named zip that has two parameters, two arrays
// define a variable named finalArray and assign it an empty array
// define a variable named shorterArray and assign it the first array
// use an if statement to check if the second array is longer than the first
// if true, reassign shorterArray to be the second array
// use a for loop to loop through shorter array
// for each item, push it and the respective item from the other array into finalArray
// after the loop, return finalArray

function zip(first, second) {
  var finalArray = [];
  var shorterArray = first;
  if (second.length < first.length) {
    shorterArray = second;
  }
  for (let i = 0; i < shorterArray.length; i++) {
    var subArray = [];
    subArray.push(first[i], second[i]);
    finalArray.push(subArray);
  }
  return finalArray;
}

// after
// define a function named zip that has two parameters, two arrays
// define a variable named finalArray and assign it an empty array
// define a variable named shorterArray and assign it the first array
// use an if statement to check if the second array is shorter than the first
// if true, reassign shorterArray to be the second array
// use a for loop to loop through shorter array
// define a variable named subArray and assign it an empty array
// for each iteration, push the items from each array at that index into subArray
// push subArray into finalArray
// after the loop, return finalArray
