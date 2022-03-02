/* exported isUpperCased */

// isUpperCased(word) before:
// define a function named isUpperCased that takes one parameter, a word
// use a for loop to loop through the word
// use toLowerCase() to compare each letter and determine if it is capitalized
// if any letter is not capitalized, return false
// after the loop, return true (will only happen if all letters are capitalized)

function isUpperCased(word) {
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toLowerCase()) {
      return false;
    }
  }
  return true;
}

// isUpperCased(word) before:
// define a function named isUpperCased that takes one parameter, a word
// use a for loop to loop through the word
// use an if statement to compare each letter to letter.toLowerCase() and determine if it is capitalized
// if any letter is not capitalized, return false
// after the loop, return true (will only happen if all letters are capitalized)
