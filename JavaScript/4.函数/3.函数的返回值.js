/**
 * 函数的返回值用return语句
 * return语句有两个作用
 *  第一个作用：是返回变量
 *  第二个作用：终止函数
 * 
 * 返回值
 *  返回值可以是任何类型
 *  如果返回多个变量默认返回最后一个值
 * 
 * 如何返回多个变量
 *  可以用数组，把要返回的值放在一个数组里面即可
 *  不可以用多个变量接收多个返回值，js没有解包功能
 * 
 */

function print(obj) {
    console.log(obj);
}

function operate(x,y){
    var span1 = x + y;
    var span2 = x - y;
    var span3 = x * y;
    var span4 = x / y;
    var span5 = x % y;

    return [span1,span2,span3,span4,span5]
}

var value = operate(4,2);
print(value)