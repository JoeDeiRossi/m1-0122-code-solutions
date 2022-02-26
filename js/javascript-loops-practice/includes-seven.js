/* exported includesSeven */

function includesSeven(array) {
  for (let i = 1; i < array.length; i++) {
    if (array[i] === 7) {
      return true;
    }
  }
  return false;
}
