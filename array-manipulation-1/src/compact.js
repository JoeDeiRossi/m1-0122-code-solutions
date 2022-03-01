/* exported compact */

function compact(array) {
  const resultArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      resultArray.push(array[i]);
    }
  }
  return resultArray;
}
