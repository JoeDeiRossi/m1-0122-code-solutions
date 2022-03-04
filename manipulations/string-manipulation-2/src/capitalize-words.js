/* exported capitalizeWords */

// before
// define a function named capitalizeWords that has one parameter, a string
// define a variable named capitalizedString and assign it an empty string
// capitalize the first letter of the string argument and concatenate it onto capitalizedString
// use a for loop to loop through the rest of the string argument
// for each letter, use an if statement to check if the previous letter was a space
// if true, capitalize the current letter and concatenate it onto capitalizedString
// else, lower case the letter and concatenate it onto capitalizedString
// after the loop, return capitalizedString

function capitalizeWords(string) {
  var capitalizedString = '';
  capitalizedString += string[0].toUpperCase();
  for (let i = 1; i < string.length; i++) {
    if (string[i - 1] === ' ') {
      capitalizedString += string[i].toUpperCase();
    } else {
      capitalizedString += string[i].toLowerCase();
    }
  }
  return capitalizedString;
}
