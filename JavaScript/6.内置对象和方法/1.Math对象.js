/**
 * Math是一个内置对象，Math的所有对象和方法都是静态的，可以直接使用
 * 
 * 属性：
 * 圆周率：Math.PI
 * 
 * 方法：
 *  最大值：Math.max()
 *  如果没有参数：返回-Infinity
 *  如果参数有字符串，返回Nan
 *  最小值：Math.min()
 *  绝对值：Math.abs()
 *  四舍五入：Math.round()
 *  往上取整：Math.ceil()
 *  往下取整：Math.floor()
 * 
 * 随机数方法random
 *  Math.random():返回一个0-1的随机小数，不包括0，也不包括1
 *  Math.floor(Math.random() * (max - min + 1)) + min:返回两个数字之间的随机整数
 * 
 */

 function print(string){
     console.log(string);
 }

 print(Math.PI);
 print(Math.abs(-10));
 print(Math.max(45,89));
 print(Math.min(26,67));
 print('\n');

 print(Math.floor(1.1));  //1
 print(Math.floor(1.9));  //1
 print(Math.ceil(1.1));   //2
 print(Math.ceil(1.9));   //2
 print('\n');

 print(Math.round(3.3))
 print(Math.round(3.7))
 print('\n');

 // random
 print(Math.random())

 function randomint(min,max){
     return Math.floor(Math.random() * (max - min + 1)) + min
 }

 print(randomint(45,89));