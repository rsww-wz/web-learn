var a = 3;
var b = 4.2;
var c = "hello"
var d = false
var e = true
var f = '5';
var g = '5e';
var h = null
var i = Infinity
var j = undefined
var k = NaN

// 任何类型都可以转化为字符串类型
// 方法一
// 转化为字符串的函数是String()
console.log(String(a));
console.log(String(b));
console.log(String(d));
console.log(String(e));
console.log(String(h));
console.log(String(i));
console.log(String(j));

console.log('\n');

// 方法二
// 此方法不能把null，undefined，Infinity转化为字符串,否则会报错
console.log(b.toString())
console.log(d.toString())
console.log(e.toString())
// console.log(h.toString())
// console.log(i.toString())
// console.log(j.toString())
console.log(k.toString())
