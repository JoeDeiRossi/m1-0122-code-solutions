/* exported ransomCase */

// before
// define a function named ransomCase that has one parameter, a string
// define a variable named ransomCaseString and assign it an empty string
// use a for loop to loop through every other letter of the string, starting with the first letter
// define a variable named lowerCaseLetter and assign it the lower case current letter using .toLowerCase()
// define a variable named upperCaseLetter and assign it the upper case next letter using .toUpperCase()
// concatenate both lowerCaseLetter and upperCaseLetter onto ransomCaseString
// return ransomCaseString after the loop

function ransomCase(string) {
  var ransomCaseString = '';
  for (let i = 0; i < string.length; i += 2) {
    ransomCaseString += string[i].toLowerCase();
    if (string[i + 1]) {
      ransomCaseString += string[i + 1].toUpperCase();
    }
  }
  return ransomCaseString;
}

// after
// define a function named ransomCase that has one parameter, a string
// define a variable named ransomCaseString and assign it an empty string
// use a for loop to loop through every other letter of the string, starting with the first letter
// use toLowerCase() on the current letter and concatenate it onto ransomCaseString
// use an if statement to check if there is a letter after the current one
// if true, use ToUpperCase() on the following letter and concatenate it onto ransomCaseString
// return ransomCaseString after the loop
