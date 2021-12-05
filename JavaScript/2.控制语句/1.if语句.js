var a = 3;
var b = 6 / 2;

/* 
if语句格式
if(条件){}else{}

如果只有一个语句，可以不用花括号，否则一定要花括号
*/


// if语句
if (a == b)
    console.log('他们的一样的');
console.log('\n');

var span = 'hello world';
var span1 = '';

// if-else语句
if (!span) {
    span1 = "Good morning";
    console.log(span1);
} else {
    span1 += " javascript";
    console.log(span1)
}
console.log('\n');

// 级联if-else语句
var i = 7;
if (i % 2 == 0) {
    console.log('该数是2的倍数');
} else if (i % 3 == 0) {
    console.log('该数是5的倍数');
} else if (i % 5 == 0) {
    console.log('该数是5的倍数');
} else {
    console.log('该数不是指定数的倍数');
}
console.log('\n');

// 嵌套if-else语句
i = 90;
if (i % 2 == 0) {
    if (i % 5 == 0) {
        console.log('该数是以零结尾的数');
    } else {
        console.log('该数是不以零结尾的偶数');
    }
} else {
    console.log('该数是奇数');
}