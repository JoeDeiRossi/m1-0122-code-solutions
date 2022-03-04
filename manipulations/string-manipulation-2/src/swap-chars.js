/* exported swapChars */

function swapChars(firstIndex, secondIndex, string) {
  let swappedString = '';
  for (let i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      swappedString += string[secondIndex];
    } else if (i === secondIndex) {
      swappedString += string[firstIndex];
    } else {
      swappedString += string[i];
    }
  }
  return swappedString;
}
