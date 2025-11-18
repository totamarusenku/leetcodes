/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const inputString = s;
  const trimmedString = inputString.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const finalString = trimmedString.split("").reverse().join("").toLowerCase();
  return trimmedString === finalString;
};
