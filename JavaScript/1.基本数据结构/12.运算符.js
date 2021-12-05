// 自增和自减运算符

var a = 1;
console.log(a)
console.log(a++);
console.log(++a);
console.log('\n');

var b = 6;
console.log(b);
console.log(b--);
console.log(--b);
console.log('\n');

// 复合赋值运算符

var c = 100;
var d = 2;
var sum = 1;

sum += c;
console.log(sum);
sum *= c;
console.log(sum);
sum /= c;
console.log(sum);
sum %= c;
console.log(sum);
console.log('\n');

sum += c + d;
console.log(sum);
sum *= c * d;
console.log(sum);
sum *= (c * d);
console.log(sum);
console.log('\n');

// 比较运算符,返回布尔值，真为true，假为false
a = 56;
b = 23;

console.log(a > b);
console.log(a < b);
console.log(a == b);
console.log(a != b);
console.log('\n');

// 逻辑运算符,返回的布尔值
a = false;
b = true

console.log(a && b);
console.log(a || b);
console.log(!a);
console.log(!b);