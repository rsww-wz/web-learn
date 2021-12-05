// 数组的元素可以是任何类型的数据
// 输出整个数组直接打印数组名即可

var lst = [12, 3.14, 'hello world', null, false, undefined];
console.log(lst);

// 数组元素个数
// 用length属性查看数组大小，注意length不是函数，不用括号
len = lst.length;
console.log(len);

// 通过下标索引访问数组元素
// 如果下标索引超过数组元素个数，不会报错，元素的值是undefined,元素个数不会增加
console.log(lst[0]);
console.log(lst[4]);
console.log(lst[8]);
console.log(lst.length);
console.log('\n');

// 数组类型,类型是一个对象
console.log(typeof lst);

// 遍历数组元素
for(var i = 0; i < lst.length; i++) {
    console.log(lst[i]);
}
