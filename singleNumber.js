/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let numbers = nums;
  if (numbers.length === 1) {
    return numbers[0];
  }
  for (i = 0; i < numbers.length; i++) {
    if (numbers.includes(numbers[i])) {
      numbers.splice(i, 1);
    }
  }
  console.log(numbers);
};

singleNumber([3, 3, 5, 5, 1]);
