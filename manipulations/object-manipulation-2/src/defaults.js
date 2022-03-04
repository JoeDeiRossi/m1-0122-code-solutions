/* exported defaults */

function defaults(target, source) {
  for (var key in source) {
    if (!Object.prototype.hasOwnProperty.call(target, key)) {
      target[key] = source[key];
    }
  }
}
