/* exported titleCase */

function titleCase(title) {
  var finalTitle = '';
  var titleAsArray = title.split(' ');

  var firstWord = titleAsArray[0];
  if (firstWord.toLowerCase() === 'javascript:') {
    finalTitle += 'JavaScript:';
  } else {
    finalTitle += firstWord[0].toUpperCase();
    finalTitle += firstWord.slice(1).toLowerCase();
  }
  if (titleAsArray.length > 1) {
    finalTitle += ' ';
  }

  for (let i = 1; i < titleAsArray.length; i++) {
    var currentWord = titleAsArray[i];
    var previousWord = titleAsArray[i - 1];

    if (previousWord[previousWord.length - 1] === ':') {
      finalTitle += currentWord[0].toUpperCase();
      finalTitle += currentWord.slice(1).toLowerCase();
    } else if (currentWord.indexOf('-') !== -1) {
      var capitalizedHyphenWord = currentWord[0].toUpperCase();
      for (let i = 1; i < currentWord.length; i++) {
        if (currentWord[i - 1] === '-') {
          capitalizedHyphenWord += currentWord[i].toUpperCase();
        } else {
          capitalizedHyphenWord += currentWord[i].toLowerCase();
        }
      }
      finalTitle += capitalizedHyphenWord;
    } else {
      switch (currentWord.toLowerCase()) {
        case 'javascript':
          finalTitle += 'JavaScript';
          break;
        case 'javascript:':
          finalTitle += 'JavaScript:';
          break;
        case 'api':
          finalTitle += 'API';
          break;
        case 'and':
        case 'or':
        case 'nor':
        case 'but':
        case 'a':
        case 'an':
        case 'the':
        case 'as':
        case 'at':
        case 'by':
        case 'for':
        case 'in':
        case 'of':
        case 'on':
        case 'per':
        case 'to':
          finalTitle += currentWord.toLowerCase();
          break;
        default:
          finalTitle += currentWord[0].toUpperCase();
          finalTitle += currentWord.slice(1).toLowerCase();
      }
    }
    if (i < titleAsArray.length - 1) {
      finalTitle += ' ';
    }
  }
  return finalTitle;
}
