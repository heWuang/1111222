// 手写new  操作符

/*
    1. 它创建了一个新的对象
    2. 它会被执行[[Prototype]](也就是__proto__)连接
    3. 它使this指向新创建的对象
    4. 通过new创建的每个对象最终被[[Prototype]]链接到这个函数的prototype对象上
    5. 如果函数没有返回对象Object(包含Function,Array,Date,RegExg, Error),那么new表达式中的函数调用将返回该对象引用。
*/

// 版本一
function myNew(fun) {
  return function () {
    let obj = {
      __proto__: fun.prototype,
    };
    fun.call(obj, ...arguments);
    return obj;
  };
}

// 版本二
function myNew2(func) {
  var res = {};
  if (func.prototype !== null) {
    res.__proto__ = func.prototype;
  }
  var ret = func.apply(res, Array.prototype.slice.call(arguments, 1));
  if ((typeof ret === "object" || typeof ret === "function") && ret !== null) {
    return ret;
  }
  return res;
}

// 版本三

// function _new(fn, ...arg) {
//   let obj = Object.create(fn.prototype);
//   //   let obj = {};
//   //   obj.__proto__ = fn.prototype;
//   let res = fn.apply(obj, arg);

//   return res instanceof Object ? res : obj;
// }
