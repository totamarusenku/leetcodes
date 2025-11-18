/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  let finalArray = [];
  const halfLength = nums.length / 2;
  const firstHalf = nums.slice(0, halfLength);
  const secondHalf = nums.slice(halfLength);
  for (i = 0; i < firstHalf.length; i++) {
    finalArray.push(firstHalf[i]);
    finalArray.push(secondHalf[i]);
  }
  return finalArray;
};
