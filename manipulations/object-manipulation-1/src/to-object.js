/* exported toObject */

function toObject(keyValuePair) {
  const finalObject = {};
  const key = keyValuePair[0];
  const value = keyValuePair[1];
  finalObject[key] = value;
  return finalObject;
}
