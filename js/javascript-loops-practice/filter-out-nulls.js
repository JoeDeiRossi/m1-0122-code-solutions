/* exported filterOutNulls */

function filterOutNulls(values) {
  const denulledArray = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      denulledArray.push(values[i]);
    }
  }
  return denulledArray;
}
