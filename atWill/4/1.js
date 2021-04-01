// 三数求和
// a + b + c === 0;
let nums = [-1, 0, 1, 2, -1, -4];

// const
// 双指针
const threeSum = function (nums) {
  let res = [];
  nums = nums.sort((a, b) => a - b);
  const len = nums.length;
  // 只需要遍历到倒数第三个数就足够了，因为左右指针会遍历后面两个数
  for (let i = 0; i < len - 2; i++) {
    let j = i + 1;
    let k = len - 1;
    if (i > 0 && nums[i] === nums[i - 1]) {
      // 遇到与目标值一样的数  直接跳过
      continue;
    }
    while (j < k) {
      // 左指针的小了
      if (nums[i] + nums[j] + nums[k] < 0) {
        j++;
        // 如果移了位置还是一样的数据  继续移动
        while (j < k && nums[j] === nums[j - 1]) {
          j++;
        }
      } else if (nums[i] + nums[j] + nums[k] > 0) {
        k--;
        while (j < k && nums[k] === nums[k + 1]) {
          k--;
        }
      } else {
        res.push([nums[i], nums[j], nums[k]]);
        //   左右指针一起动
        j++;
        k--;
        while (j < k && nums[j] === nums[j - 1]) {
          j++;
        }
        while (j < k && nums[k] === nums[k + 1]) {
          k--;
        }
      }
    }
  }
  return res;
};
console.log(threeSum(nums));
