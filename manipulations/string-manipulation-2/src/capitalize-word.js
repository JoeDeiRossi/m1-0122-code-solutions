/* exported capitalizeWord */

// before
// define a function named capitalizeWord that takes one parameter, a single word string
// use an if statement with .toLowerCase() to check if the word is 'javascript'
// if true, return 'JavaScript'
// use .toUpperCase() to capitalize the first letter of the word
// use a for loop to loop through the rest of the word
// use .toLowerCase() on each letter
// return word

function capitalizeWord(word) {
  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  }

  var capitalizedWord = '';
  capitalizedWord += word[0].toUpperCase();

  for (let i = 1; i < word.length; i++) {
    capitalizedWord += word[i].toLowerCase();
  }

  return capitalizedWord;
}

// after
// define a function named capitalizeWord that takes one parameter, a single word string
// use an if statement with .toLowerCase() to check if the word is 'javascript'
// if true, return 'JavaScript'
// define a variable named capitalizedWord and assign it an empty string
// use .toUpperCase() to capitalize the first letter of the word and concatenate it onto capitalizedWord
// use a for loop to loop through the rest of the word
// use .toLowerCase() on each letter and concatenate it onto capitalizedWord
// return word
