// 给定一个非空字符串s ,最多删除一个字符，判断是否能成为回文字符串

const validPalindrome = function (s) {
  const len = s.length;
  let i = 0,
    j = len - 1;
  while (i < j && s[i] === s[j]) {
    i++;
    j--;
  }
  
  if (isPalindrome(i + 1, j)) {
    return true;
  }
  if (isPalindrome(i, j - 1)) {
    return true;
  }

  function isPalindrome(st, ed) {
    while (st < ed) {
      if (s[st] !== s[ed]) {
        return false;
      }
      st++;
      ed--;
    }
    return true;
  }
  return false;
};

console.log(validPalindrome("aa"));
// console.log(validPalindrome("abca"));
