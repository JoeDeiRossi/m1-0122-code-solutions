/* exported isAnagram */

// before
// define a function named isAnagram that has two parameters, two strings
// use a for loop to loop through the second string
// for each character, check to see if the first string does not include the character
// if true, return false
// after the loop, return true

function isAnagram(firstString, secondString) {
  var firstStringWithoutSpaces = '';
  for (let i = 0; i < firstString.length; i++) {
    if (firstString[i] !== ' ') {
      firstStringWithoutSpaces += firstString[i];
    }
  }

  var secondStringWithoutSpaces = '';
  for (let i = 0; i < secondString.length; i++) {
    if (secondString[i] !== ' ') {
      secondStringWithoutSpaces += secondString[i];
    }
  }

  if (firstStringWithoutSpaces.length !== secondStringWithoutSpaces.length) {
    return false;
  }

  var firstStringMinusMatches = firstStringWithoutSpaces;
  for (let i = 0; i < secondStringWithoutSpaces.length; i++) {
    var currentCharacter = secondStringWithoutSpaces[i];
    if (firstStringMinusMatches.includes(currentCharacter)) {
      firstStringMinusMatches = firstStringMinusMatches.replace(currentCharacter, '');
    }
  }

  if (firstStringMinusMatches.length === 0) {
    return true;
  }
  return false;
}

// after
// define a function named isAnagram that has two parameters, two strings
// define a variable named firstStringWithoutSpaces and assign it an empty array
// use a for loop to loop through firstString
// use an if statement to check if the current character is not a space
// if true, concatenate the character onto firstStringWithoutSpaces
// do the same for the second string
// use an if statement to compare the lengths of the spaceless strings
// if they are not equal, return false
// define a variable named firstStringMinusMatches and assign it the value of firstStringWithoutSpaces
// use a for loop to loop through secondStringWithoutSpaces
// define a variable named currentCharacter and assign it secondStringWithoutSpaces[i]
// use an if statement to check if firstStringMinusMatches includes currentCharacter
// if true, update firstStringMinusMatches to replace the first instance of currentCharacter with nothing (removing it)
// after the loop, use an if statement to check if the length of firstStringMinusMatches is 0
// if true, return true
// return false
