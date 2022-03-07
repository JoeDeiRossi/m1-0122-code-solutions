/* exported unique */

function unique(array) {
  var finalArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!finalArray.includes(array[i])) {
      finalArray.push(array[i]);
    }
  }
  return finalArray;
}
