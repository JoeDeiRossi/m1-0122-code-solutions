/* exported truncate */

// before
// define a function named truncate that has two parameters, a number and a string
// define a variable named truncatedString and assign it an empty string
// use a for loop to loop through the string until i = the number passed in
// concat each letter onto truncatedString
// after the loop, concat '...' onto truncatedString
// return truncatedString

function truncate(length, string) {
  var truncatedString = '';
  for (let i = 0; i < length; i++) {
    if (string[i]) {
      truncatedString += string[i];
    }
  }
  truncatedString += '...';
  return truncatedString;
}

// after
// define a function named truncate that has two parameters, a number and a string
// define a variable named truncatedString and assign it an empty string
// use a for loop to loop through the string until i = the number passed in
// use an if statement to check if there is anything at the current index of the string
// if true, concatenate the letter onto truncatedString
// after the loop, concatenate '...' onto truncatedString
// return truncatedString
