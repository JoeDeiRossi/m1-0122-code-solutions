/* exported filterOutStrings */

function filterOutStrings(values) {
  const stringlessArray = [];
  for (let i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      stringlessArray.push(values[i]);
    }
  }
  return stringlessArray;
}
