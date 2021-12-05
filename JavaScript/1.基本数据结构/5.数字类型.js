var span = 3;
var span1 = 3.14;

// 最大正数
console.log(Number.MAX_VALUE);
console.log(typeof(Number.MAX_VALUE));

// 最小正数
console.log(Number.MIN_VALUE);
console.log(typeof(Number.MIN_VALUE));

// 如果一个数比这个最大值还大，就会显示Infinity，意思是无穷大
// Infinity是正无穷，负无穷是Infinity
console.log(Infinity);
console.log(-Infinity);
console.log(typeof(Infinity));
console.log(typeof(-Infinity));

// Nan类型
console.log("hello" * "world")
console.log(typeof("hello" * "world"))

/*
注意：
    无论是最大最小值，还是无穷大，无穷小，他们都是一个常量，不可以变的
    还有他们都是number类型
    如果两个字符串相乘，他们的值是Nan，也是一种number类型
*/