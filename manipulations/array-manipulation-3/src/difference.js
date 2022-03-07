/* exported difference */

function difference(first, second) {
  var finalArray = [];
  for (let i = 0; i < first.length; i++) {
    var currentItemFirst = first[i];
    if (!second.includes(currentItemFirst) && !finalArray.includes(currentItemFirst)) {
      finalArray.push(currentItemFirst);
    }
  }
  for (let i = 0; i < second.length; i++) {
    var currentItemSecond = second[i];
    if (!first.includes(currentItemSecond) && !finalArray.includes(currentItemSecond)) {
      finalArray.push(currentItemSecond);
    }
  }
  return finalArray;
}
