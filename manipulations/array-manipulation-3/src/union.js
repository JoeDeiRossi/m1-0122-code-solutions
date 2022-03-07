/* exported union */

function union(first, second) {
  var finalArray = [];
  for (let i = 0; i < first.length; i++) {
    if (!finalArray.includes(first[i])) {
      finalArray.push(first[i]);
    }
  }
  for (let i = 0; i < second.length; i++) {
    if (!finalArray.includes(second[i])) {
      finalArray.push(second[i]);
    }
  }
  return finalArray;
}
