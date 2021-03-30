// 就是修改this 指向
Function.prototype.mycall = function (context) {
  if (typeof this !== "function") {
    throw new TypeError("not function");
  }
  context = context || window;
  context.fn = this;
  let arg = arguments.slice(1);
  let result = context.fn(...arg);
  delete context.fn;
  return result;
};

Function.prototype.myapply = function (context) {
  if (typeof this !== "function") {
    throw new TypeError("not function");
  }
  context = context || window;
  context.fn = this;
  let result;
  if (arguments[1]) {
    result = context.fn(...arguments[1]);
  } else {
    result = context.fn();
  }
  delete context.fn;
  return result;
};

// bind  bind 方法会创建一个新函数，当着新函数被调用时，bind()的第一个参数将作为它运行时的this,之后的一序列参数将会在传递的实参前作为它的参数
// 一个绑定函数也能使用new 操作符创建对象，这种行为就像把原函数当成构造器，提供的this 值被略，同时调用时的参数被提供给模拟函数
