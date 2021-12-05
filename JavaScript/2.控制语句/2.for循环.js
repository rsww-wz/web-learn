/*
如果for循环只有一个语句可以不用花括号，否则序号花括号
for循环的语法和C语言的语法一样

for 循环多用于知道次数的循环
*/

for (var i = 0; i < 10; i++)
    console.log(i);

// console.log()函数一定会换行显示，不可能直接做到不换行显示
// for循环同一行显示

sum = '';
for (var i = 0; i < 10; i++) {
    str = String(i) + ' ';
    sum += str;
}
console.log(sum);

// 九九乘法表
for (var i = 1; i < 10; i++) {
    for (var j = i; j < 10; j++) {
        console.log("%d * %d = %d", i, j, i * j);
        document.write(i + ' * ' + j + ' = ' + i * j + "    ");
    }
    document.write('<br>')
}
