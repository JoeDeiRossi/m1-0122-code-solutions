/* exported isPalindromic */

// before
// define a function named isPalindromic that has one parameter, a string
// define a variable named reversedString and assign it an empty string
// use a for loop to loop through the argument string backwards
// for each character, concatenate it onto reversedString
// after the loop, use an if statement to check if the argument string and reversedString are the same
// if true, return true
// return false

function isPalindromic(string) {
  var reversedString = '';
  var stringWithoutSpaces = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      stringWithoutSpaces += string[i];
    }
  }

  for (let i = stringWithoutSpaces.length - 1; i >= 0; i--) {
    reversedString += stringWithoutSpaces[i];
  }

  if (stringWithoutSpaces === reversedString) {
    return true;
  }
  return false;
}

// after
// define a function named isPalindromic that has one parameter, a string
// define a variable named reversedString and assign it an empty string
// define a variable named stringWithoutSpaces and assign it an empty string
// use a for loop to loop through the argument string
// use an if statement to check if the current character is not a space
// if true, concatenate the current character onto stringWithoutSpaces
// use a new for loop to loop through stringWithoutSpaces backwards
// for each character, concatenate it onto reversedString
// after the loop, use an if statement to check if stringWithoutSpaces and reversedString are the same
// if true, return true
// return false
