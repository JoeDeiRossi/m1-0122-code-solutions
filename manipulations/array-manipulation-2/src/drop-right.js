/* exported dropRight */

function dropRight(array, count) {
  const finalArray = [];
  for (let i = 0; i < array.length - count; i++) {
    finalArray.push(array[i]);
  }
  return finalArray;
}
