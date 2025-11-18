/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let targetArray = [];
  if (nums.includes(target)) {
    return nums.indexOf(target);
  } else {
    for (i = 0; i < nums.length; i++) {
      if (target - nums[i] > 0) {
        targetArray.push(1);
      }
    }
  }
  return targetArray.length;
};
