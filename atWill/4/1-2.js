const majorityElement = function (nums) {
  let len = nums.length;
  let mid = Math.ceil(len / 2);
  let maps = {};
  for (let i = 0; i < len; i++) {
    if (maps[nums[i]]) {
      maps[nums[i]] += 1;
      if (maps[nums[i]] >= mid) {
          console.log(nums[i])
        return nums[i];
      }
    } else {
      maps[nums[i]] = 1;
    }
  }
};

majorityElement([1, 2, 3, 2, 2, 2, 5, 4, 2]);
