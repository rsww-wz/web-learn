/**
 * javascript数据类型
 * 基本数据类型
 *  Number
 *  String
 *  Boolean
 *  null
 *  undefined
 * 对象
 *  object
 * 
 * 对象
 *  对象是一种符合数据类型，对象中可以多种不同数据类型的属性
 *  可以理解为对象是一个容器，用来组织不同变量
 * 
 * 对象类型
 *  数组
 *  函数
 *  键值对
 * 
 * 对象的分类
 * 内建对象
 *  由ES标准定义的对象，在任何ES中都可以使用
 *  比如：Number，String，Null，Boolean，Function，object等
 * 
 * 宿主对象
 *  有js运行环境提供，主要是指浏览器提供对象
 *  比如：DOM，BOM
 *  console.log()就是DOM对象
 * 自定义对象
 *  自己创建的对象
 */

/*
 * 创建对象的方法
 * 
 * 方法1：使用new Object创建对象
 *  语法：new Object()
 *  使用new调用的函数是构造函数，是专门用来创建对象的
 * 
 * 方法2：使用对象字面量来创建对俩，最常用
 *  语法：var 对象名 = {}
 *  可以在创建对象的时候直接给对象添加属性
 * 
 * 方法3:使用构造函数一次创建多个相同模式的对象
 * 构造函数就是把一些相同的代码抽象处理封装到构造函数里面
 * 语法：function 构造函数名(参数){}
 *      里面的属性必须使用this，表示指向的是那个对象
 *      调用这个构造函数创建对象的使用：new 构造函数名(参数)
 *      构造函数名一般要大写
 *      语法与python的构造函数很像
 * 
 * 构造函数类似python的类，对象也是类似python的对象
 * 
 * 理解 new的作用
 *  new 构造函数在内存中创建了一个空对象
 *  this 就会指向刚才创建的空对象
 *  执行构造函数的代码，向空对象添加属性和方法，最后返回一个对象
 */

 // 使用new Object()
 var span = new Object();
 console.log(typeof span);
 console.log('\n');


 // 使用字面量创建对象
var obj = {
    name:"小明",
    age:18,
    gender:"boy"
}

console.log(typeof obj);
console.log(obj);


// 使用构造函数

function Student(name,age,hobby,grade){
    this.name = name;
    this.age = age;
    this.hobby = hobby;
    this.grade = grade
}

// 创建对象（实例化构造函数）
var hobby = ['下棋','看电视'];
var grade = {
    Chinese:89,
    Math:70,
    English:94.5
};

var Ming = new Student('小明',18,hobby,grade);
var Hong = new Student('小红',20,null,grade);

console.log(Ming);
console.log(Hong);




 
