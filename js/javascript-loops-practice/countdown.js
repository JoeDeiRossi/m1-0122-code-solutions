/* exported countdown */

function countdown(number) {
  const numberArray = [];
  while (number >= 0) {
    numberArray.push(number);
    number--;
  }
  return numberArray;
}
