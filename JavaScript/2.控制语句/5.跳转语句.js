/**
 * JavaScript的跳转语句有：continue，break
 * continue：只能用在循环语句，作用是结束本次循环，进入下一次循环
 * break：用于循环语句和判断语句中，作用是退出该语句
 * JavaScript没有goto语句
 */

// 判断素数
// 变量作用域：js里面var声明的变量只有函数作用域，没有块级作用域。
// 也就是说，函数可以隔离变量，for不能隔离变量

var a = 15;
for(var i = 2; i < a; i++){
    if(a % i == 0)break;
}
if(i < a)
    console.log("%d不是素数",a);
else
    console.log("%d是素数",a);
console.log('\n');

// 100内素数
for(var num = 2; i < 100; num++){
    for(var i = 2; i < num; i++){
        if(num % i == 0)
            break;
    }   
    if(i < num)
        console.log();
    else
        console.log(num);
}
