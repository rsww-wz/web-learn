// 声明变量用关键字var
// 可以同时声明多个变量
// 如果声明的同时赋值叫变量初始化，也支持多个变量初始化
// 如果只声明变量，里面的值是undefined
// JavaScript标识符命名采用的是Unicode的编码

// 只定义
var a;

// 多变量初始化
var b = 45, c = 4.6, d = 'hello world';

// 先定义后赋值
var f;
f = 0;

// 不使用关键字，直接创建并赋值一个变量
span = "Good morning";

// 声明常量
const PI = 3.14;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(f);
console.log(span);
console.log(PI);

// 如果直接使用没有定义过的变量会报错：is not defined
console.log(w);
