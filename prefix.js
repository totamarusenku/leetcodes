const words = ["random", "randy", "randolph"];
let listOfSplitWords = [];
let prefixLetters = [];
const longestPrefix = (listOfWords) => {
  for (i = 0; i < listOfWords.length; i++) {
    listOfSplitWords.push(listOfWords[i].split(""));
  }
  for (j = 0; j < listOfSplitWords.length; j++) {
    for (k = j + 1; k < listOfSplitWords.length; k++) {
      for (l = k + 1; l < listOfSplitWords.length; l++) {
        for (m = 0; m < listOfSplitWords[j].length; m++) {
          if (
            listOfSplitWords[j][m] == listOfSplitWords[k][m] &&
            listOfSplitWords[j][m] == listOfSplitWords[l][m]
          ) {
            prefixLetters.push(listOfSplitWords[j][m]);
          }
        }
      }
    }
  }
  if (listOfSplitWords.length === 1) {
    return listOfSplitWords[0].join("");
  } else {
    return prefixLetters.join("");
  }
};

longestPrefix(words);
