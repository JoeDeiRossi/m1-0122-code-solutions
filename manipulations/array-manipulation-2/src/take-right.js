/* exported takeRight */

function takeRight(array, count) {
  const finalArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    if (count > 0) {
      finalArray.unshift(array[i]);
      count--;
    }
  }
  return finalArray;
}
