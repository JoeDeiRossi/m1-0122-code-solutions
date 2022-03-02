/* exported chunk */

function chunk(array, size) {
  const finalArray = [];
  for (let i = 0; i < array.length; i += size) {
    const slice = array.slice(i, i + size);
    finalArray.push(slice);
  }
  return finalArray;
}
