var a = 2;
var b = 3.2;
var c = 'hello world';
var d = null;
var e = undefined;
var f = NaN;
var g = Infinity;
var h = '';
var i = 0;

// 转化为布尔值函数：Boolean
// null和undefined都是转成false的
// 数字0，NaN和空字符串转化成false
// false:0,空串，NaN，undefined

console.log(Boolean(a));
console.log(Boolean(b));
console.log(Boolean(c));
console.log(Boolean(d));
console.log(Boolean(e));
console.log(Boolean(f));
console.log(Boolean(g));
console.log(Boolean(h));
console.log(Boolean(i));
