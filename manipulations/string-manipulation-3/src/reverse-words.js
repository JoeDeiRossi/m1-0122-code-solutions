/* exported reverseWords */

function reverseWords(string) {
  var finalString = '';
  var wordArray = string.split(' ');

  for (let i = 0; i < wordArray.length; i++) {
    var currentWord = wordArray[i];
    for (let j = currentWord.length - 1; j >= 0; j--) {
      var currentCharacter = currentWord[j];
      finalString += currentCharacter;
    }

    if (i !== wordArray.length - 1) {
      finalString += ' ';
    }
  }
  return finalString;
}
