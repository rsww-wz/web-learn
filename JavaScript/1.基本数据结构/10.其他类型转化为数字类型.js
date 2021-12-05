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

// 其他类型转换为数字类型
// 如果字符串的内容是数字，可以转化为数字，如果是字母就转化为NaN，有一个字母也不行
// true -- 1
// false -- 0
// null -- 0
// undefined -- NaN
// NaN -- NaN

// 方法一：用Number函数
console.log(Number(b));  //不改变
console.log(Number(c));  //NaN
console.log(Number(d));  //0
console.log(Number(e));  //1
console.log(Number(f));  //5
console.log(Number(g));  //NaN
console.log(Number(h));
console.log(Number(i));
console.log(Number(j));
console.log(Number(k));
console.log('\n')


// 方法二：用专门把字符串转化为数字的函数
/*
如果是字符串的内容是整型：parseInt()
从字符串的第一个位置开始读取，读到字母和小数点为止，后面的直接不看
如果第一个就是字母，就直接返回NaN

如果是字符串的内容是浮点型：parseFloat()
读取到第二个小数点之前的有效小数

无论是哪个函数，只有字符串的第一个是字母就返回NaN

如果对非字符串类型使用这两个函数，会先转成字符串，然后按住字符串的规则来处理
作用：可以将字符串中有效的数字提取出来，转成数值类型
*/

var span = "342fg023";
var span1 = "54.26m";
var span2 = "rs 18929772346";

console.log(parseInt(span));
console.log(parseInt(span1));
console.log(parseInt(span2));
console.log('\n');

console.log(parseFloat(span));
console.log(parseFloat(span1));
console.log(parseFloat(span2));
console.log('\n');

/*
进制转化
不管什么数字都会转化为十进制输出
parseInt函数可以有第二个参数，把数字当成指定进制处理
*/

console.log(parseInt(span,2));
console.log(parseInt(span,8));
console.log(parseInt(span,16));
