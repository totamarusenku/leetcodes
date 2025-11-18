/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
  let maxLength = 0;
  let currentLength = 0;
  for (i = 0; i < sentences.length; i++) {
    currentLength = sentences[i].split(" ").length;
    if (currentLength > maxLength) {
      maxLength = currentLength;
    }
  }
  return maxLength;
};
