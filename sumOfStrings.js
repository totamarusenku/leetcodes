/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let sumOfStrings = 0;
  let stringOfNumbers = [num1, num2];
  for (i = 0; i < stringOfNumbers.length; i++) {
    let numPower = stringOfNumbers[i].length - i - 1;
    console.log(numPower);
    sumOfStrings += stringOfNumbers[i] * 10 ** numPower;
    console.log(sumOfStrings);
  }
  //   console.log(sumOfStrings);
  return sumOfStrings;
};

addStrings("89", "94");
