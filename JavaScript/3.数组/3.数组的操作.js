// 增
var lst = [];

// 方法一：通过修改length长度，长增的元素的值是undefined
// lst.length = 4;
// console.log(lst);

// 方法二：通过下标索引新增元素，没有的元素会自动创建
lst[5] = "hello";
lst[6] = false;
console.log(lst);

// 改,查
// 索引做左值是改或者新增，做右值是查
lst[5] = 'world'
lst[6] = true;
console.log(lst);

// 方法一：通过位置添加元素
var arr = [];
var len = 0
for(var i = 0; i < 100; i++){
    if (i % 2 == 0){
        len++;
        arr[len] = i
    }
}
console.log(arr)

// 方法二：通过长度添加元素
// lst.length比数组下标大一
var span = [];
for(var i = 0; i < 100; i++) {
    if(i % 2 == 0) {
        span[span.length] = i;
    }
}
console.log(span);

// 把数组拼接为字符串
var lst1 = ['hello',false,null,undefined,3];
var string = '';
for(var i = 0; i < lst1.length; i++) {
    string += lst1[i] + '|';
}
console.log(string);

// 数组赋值,数组可以直接赋值，数组元素个数不一样也可以
// 也就任意两个数组之间可以相互赋值
var a = ['hello world'];
var b = [3,5.3];
a = b;
console.log(a)