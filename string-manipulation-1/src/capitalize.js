/* exported capitalize */

// capitalize(word) before:
// define a function named capitalize that takes one parameter, a word
// re-assign the first character of word to be word[0].ToUpperCase()
// use a for loop with i=1 to loop through the rest of word
// re-assign each letter to be word[i].ToLowerCase()
// return word

function capitalize(word) {
  var capitalizedWord = '';
  capitalizedWord += word[0].toUpperCase();
  for (let i = 1; i < word.length; i++) {
    capitalizedWord += word[i].toLowerCase();
  }
  return capitalizedWord;
}

// capitalize(word) after:
// define a function named capitalize that takes one parameter, a word
// define a variable names capitalizedWord and assign it an empty string
// capitalize the first letter of word and concatenate it onto capitalizedWord
// use a for loop with i=1 to loop through the rest of word
// lowercase each remaining letter and concatenate them onto capitalizedWord
// return capitalizedWord
