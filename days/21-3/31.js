// 两个有序数组合并

let num1 = [1, 2, 3];
let num2 = [2, 5, 6];

const merge = function (num1, num2) {
  const m = num1.length;
  const n = num2.length;
  let res = Array.from(m + n);
  let i = m - 1,
    j = n - 1,
    k = m + n - 1;

  while (i >= 0 && j >= 0) {
    if (num1[i] >= num2[j]) {
      res[k] = num1[i];
      i--;
      k--;
    } else {
      res[k] = num2[j];
      j--;
      k--;
    }
    
    while (j >= 0) {
      res[k] = num2[j];
      k--;
      j--;
    }
  }
};
