const moveZeroes = (nums) => {
  let write = 0;

  for (let read = 0; read < nums.length; read++) {
    if (nums[read] !== 0) {
      nums[write] = nums[read];
      write++;
    }
  }

  while (write < nums.length) {
    nums[write] = 0;
    write++;
  }
  console.log(nums);
};

moveZeroes([0, 1, 0, 3, 12]);
moveZeroes([0]);
