/* exported intersection */

function intersection(first, second) {
  var finalArray = [];
  for (let i = 0; i < first.length; i++) {
    var currentItem = first[i];
    if (second.includes(currentItem) && !finalArray.includes(currentItem)) {
      finalArray.push(currentItem);
    }
  }
  return finalArray;
}
