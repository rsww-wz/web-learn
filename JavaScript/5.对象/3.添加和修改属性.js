/**
 * 向对象添加属性也有两种方法
 * 
 * 方法1
 *  使用中括号做左值，如果没有这个key，就会添加这个属性
 * 
 * 方法2:
 *  使用对象.属性，如果没有这个属性，就会添加这个属性
 * 
 * 修改对象的属性
 *  和添加对象的属性一样，不同的是，如果这个属性存在就会修改，不存在就会添加
 */

 function print(string){
     console.log(string);
 }

var Student = {
    name:'小明',
    age:19,
    gender:'boy',
}
print(Student);
print('\n');

// 方法1

Student["hobby"] = ['编程','看电视','下棋'];
// print(Student);
print('\n');

// 方法2

Student.grade = {
    Chinese:78,
    Math:90,
    English:83.5
}
// print(Student);
print('\n');
