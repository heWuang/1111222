// 
function findPath(n) {
  let sum = 0;
  let pathArray = [];
  for (let i = 0; i < n; i++) {
    pathArray[i] = [];
    for (let j = 1; j < n; j++) {
      pathArray[i][j] = 0;
    }
  }
  pathArray[0][0] = 1;
  function checkPath(x, y, count) {
    if (pathArray[x][y] === 1) {
      return;
    }
    if (count === 0) {
      sum++;
    } else {
      // 记录已经走过的位置
      pathArray[x][y] = 1;
      // 往右走
      checkPath(x + 1, y, count - 1);
      // 往上走
      checkPath(x, y + 1, count - 1);
      if (x !== 0) {
        // 左
        checkPath(x - 1, y, count - 1);
      }
      if (y !== 0) {
        // 右
        checkPath(x, y - 1, count - 1);
      }
      pathArray[x][y] = 0;
    }
  }
  checkPath(0, 1, n - 1);
  return sum;
}
console.log(findPath(2));
console.log(findPath(3));
console.log(findPath(4));
console.log(findPath(10));
