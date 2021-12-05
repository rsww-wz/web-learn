/**
 * 匿名函数定义
 *  (function(){})
 * 
 * 如何调用匿名函数
 *  方法一：直接在函数体后面加括号,如果有参数就在括号后面写参数即可
 *  方法二：把一个匿名函数赋值给一个变量，然后这个变量就是这个匿名函数了
 * 
 * 匿名函数的除了定义与python不同，其他用法基本和python是一样的
 * 
 */

var sum;
sum = (function (x , y){
     return x + y
})(2,5);

console.log(sum);

span = (function(x,y){
    return x - y
})

value = span(9,3);
console.log(value);

