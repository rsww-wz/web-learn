var span = "hello world ";
var span1 = "Good morning ";

console.log(span * 3);
console.log(span + 3);
console.log(span + false);
console.log(span + true);
console.log(span + NaN);
console.log(span + span1);
console.log(span - span1);
console.log(span / span1);
console.log(span % span1);

/*
当对非Number类型的值进行计算时，会将这些值转换为Number，然后再运算
任何的值和字符串做加法运算，都会把非字符串类型的那个值转换为字符串,然后再和字符串做拼串的操作
任何值和NaN做运算，都的NaN

把任何类型转换成字符串的方法：把那个数据类型和空字符串做加法，实际上也是调用了String函数 

字符串除了有字符串的加法，没有其他的运算符，字符串的加法的效果是字符串的拼接
字符串的其他方法返回的值是Nan，它的类型是number类型

字符串也不可以和数字相乘

任何值做，减法，乘法，除法，结果都会自动转换成Number类型
*/