// 爬楼梯
// 记忆搜索

// const f = [];

// const climbStairs = function (n) {
//   if (n === 1) {
//     return 1;
//   }
//   if (n === 2) {
//     return 2;
//   }
//   if (f[n] === undefined) f[n] = climbStairs(n - 1) + climbStairs(n - 2);
//   return f[n];
// };

const climbStairs = function (n) {
  // 初始化数组
  const f = [];
  // 初始化已知的值
  f[1] = 1;
  f[2] = 2;
  // 动态修改每一项
  for (let i = 3; i <= n; i++) {
    f[i] = f[i - 1] + f[i - 2];
  }
  return f[n];
};

console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(4));
console.log(climbStairs(5));
console.log(climbStairs(6));
console.log(climbStairs(50));
console.log(climbStairs(100));
