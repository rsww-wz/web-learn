/**
 * 遍历对象
 *  可以使用像python一样的for in循环
 *  可以用于遍历数组和对象
 *  语法：for (变量 in 对象)
 *    变量得到的是属性名
 *    如果要得到属性值：对象[变量]
 */

var Student = {
    name:'小明',
    age:20,
    gender:'boy',
    hobby:['下棋','运动','看电视'],
}

// 遍历对象key
for(var k in Student){
  console.log(k)
}
console.log('\n');


// 遍历对象value
for (var k in Student) {
  console.log(Student[k])
}
console.log('\n');

// 遍历数组
// 变量是生成序号的，要访问元素可以用索引
var lst = [1,2,3,4,5,6,7,8,9];
for (var v in lst){
  console.log(lst[v])
}
