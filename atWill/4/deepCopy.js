// 深拷贝
// function deepCopy(data) {
//   return JSON.parse(JSON.stringify(data));
// }

function forEach(array, iteratess) {
  let index = -1;
  const length = array.length;
  while (++index < length) {
    iteratess(array[index], index);
  }
  return array;
}
function deepCopy(target, map = new WeakMap()) {
  if (typeof target === "object") {
    const isArray = Array.isArray(target);
    let cloneTarget = isArray ? [] : {};
    if (map.get(target)) {
      return target;
    }
    map.set(target, cloneTarget);

    const keys = isArray ? undefined : Object.keys(target);
    forEach(keys || target, (value, key) => {
      if (keys) {
        key = value;
      }

      cloneTarget[key] = deepCopy(target[key], map);
    });
    return cloneTarget;
  } else {
    return target;
  }
}

let obj = {
  name: "1",
  say: function () {
    console.log(this.name);
  },
  sss: new Set([1, 2, 3]),
};

let obj2 = deepCopy(obj);
console.log(obj2);
