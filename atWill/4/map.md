### Map

含义与用法
JavaScript 的对象，本质上是键值对的集合，但是传统上只能使用字符串作为建

Map 结构，类似于对象，也是键值对的集合，但是建的范围不限于字符串，各类类型的值都可以作为建名。

```JavaScript
const m = new Map()
const o = {
    p: "hello world"
}
m.set(o, 'content)

```

Map 作为构造函数，也可以接受一个数组作为参数。该数组的成员表示键值对的数组

```js
const map = new Map([
  ["name", "张三", "lisi"],
  ["title", "标题"],
]);
console.log(map.get("name"));
// 相当于
const items = [
  ["name", "张三", "lisi"],
  ["title", "标题"],
];

const map = new Map();
items.forEach(([key, value]) => map.set(key, value));
// 也就是只取前两个数据
```

<!-- Map 中，如果对同一个值复制多次，后面的值将覆盖前面的值，但是如果是对象，必须引用地址一样 才会被覆盖 -->

```js
const map = new Map();
map.set([123], "1");
map.set([123], "2");
map.set([123], "3");.
// map = >  Map(3) {Array(1) => "1", Array(1) => "2", Array(1) => "3"}
```
