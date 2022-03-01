/* exported initial */

function initial(array) {
  var resultArray = [];
  for (let i = 0; i < array.length - 1; i++) {
    resultArray.push(array[i]);
  }
  return resultArray;
}
