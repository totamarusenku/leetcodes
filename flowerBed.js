/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let possiblePositions = 0;
  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed.length === 1 && flowerbed[i] === 0) {
      flowerbed[i] = 1;
      possiblePositions++;
    } else if (i === 0 && flowerbed[i] === 0 && flowerbed[i + 1] === 0) {
      flowerbed[i] = 1;
      possiblePositions++;
    } else if (
      i === flowerbed.length - 1 &&
      flowerbed[i] === 0 &&
      flowerbed[i - 1] === 0
    ) {
      flowerbed[i] = 1;
      possiblePositions++;
    } else if (
      flowerbed[i] === 0 &&
      flowerbed[i + 1] === 0 &&
      flowerbed[i - 1] === 0
    ) {
      flowerbed[i] = 1;
      possiblePositions++;
    }
  }
  console.log(possiblePositions);
  return possiblePositions >= n;
};

canPlaceFlowers([1], 1);
