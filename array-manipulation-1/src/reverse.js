/* exported reverse */

function reverse(array) {
  const resultArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    resultArray.push(array[i]);
  }
  return resultArray;
}
