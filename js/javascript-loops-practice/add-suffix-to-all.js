/* exported addSuffixToAll */

function addSuffixToAll(words, suffix) {
  const suffixedArray = [];
  for (let i = 0; i < words.length; i++) {
    suffixedArray.push(words[i] + suffix);
  }
  return suffixedArray;
}
