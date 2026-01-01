/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  const uniqNums = [...new Set(nums)];
  uniqNums.sort((a, b) => b - a);
  return uniqNums.length >= 3 ? uniqNums[2] : uniqNums[0];
};
