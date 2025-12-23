/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (candyType) {
  const uniqueCandies = [...new Set(candyType)].length;
  const maxCandies = candyType.length / 2;
  console.log(uniqueCandies < maxCandies ? uniqueCandies : maxCandies);
  return uniqueCandies < maxCandies ? uniqueCandies : maxCandies;
};

distributeCandies([1, 1, 1, 1, 4, 4]);
