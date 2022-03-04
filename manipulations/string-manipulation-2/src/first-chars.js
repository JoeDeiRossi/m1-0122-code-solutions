/* exported firstChars */

function firstChars(length, string) {
  var truncatedString = '';
  for (let i = 0; i < length; i++) {
    if (string[i]) {
      truncatedString += string[i];
    }
  }
  return truncatedString;
}
