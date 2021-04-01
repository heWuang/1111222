// 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。

// 如果数组中不存在目标值 target，返回 [-1, -1]。

// 进阶：

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
var searchRange = function (nums, target) {
  let res = [-1, -1];
  const len = nums.length;
  let i = 0,
    j = len - 1;
  while (i <= j) {
    if (res[1] === -1) {
      j--;
    }
    if (res[0] === -1) {
      i++;
    }
    if (nums[i] === target) {
      res[0] = i;
    }
    if (nums[j] === target) {
      res[1] = j;
    }
    if (res[0] !== -1 && res[1] !== -1) {
      return res;
    }
  }
  return res;
};
console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
console.log(searchRange([5, 7, 7, 8, 10], 8));
