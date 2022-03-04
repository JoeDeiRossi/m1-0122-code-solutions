/* exported invert */

function invert(source) {
  var returnObject = {};
  for (var key in source) {
    var sourceValue = source[key];
    returnObject[sourceValue] = key;
  }
  return returnObject;
}
