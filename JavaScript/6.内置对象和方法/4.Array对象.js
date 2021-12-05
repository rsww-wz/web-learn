/**
 * 创建数组的两种方式
 *  var arr = new Array()
 *      如果括号里面只有一个数字，表示数组长度
 *      如果数组里面的值多于1个，表示数组元素的值
 *  var arr = []
 * 
 * 
 * 检测数组是否为数组
 *  方法1：
 *      运算符：instanceof
 *      语法： 对象 instanceof 类型
 *      返回布尔值
 *  方法2：
 *      函数：Array.isArray(对象)
 *      返回值：布尔值
 * 
 * 添加数组元素
 *  方法1：
 *      函数：push()
 *      作用：在数组后面添加数组元素，可以添加多个
 *      返回值：新数组的长度，原数组也会发生变化，是直接在原数组上操作
 * 
 *  方法2：
 *      函数：unshift()
 *      作用：在数组前面面添加数组元素，可以添加多个
 *      返回值：新数组的长度，原数组也会发生变化，是直接在原数组上操作
 * 
 *  删除数组元素
 *  方法1：
 *      函数：pop()
 *      作用：删除数组的最后一个元素，一次只能删除一个
 *      返回值：删除的元素
 * 
 * 方法2：
 *      函数：shift()
 *      作用：删除数组的第一个元素，一次只能删除一个
 *      返回值：删除的元素
 * 
 * 添加和删除数组元素的方法都是直接对原数组操作
 */

 var arr = new Array(1,2,3,4,5,6,7,8,9);
 var obj = {};
 console.log(arr);
 console.log(arr instanceof Array);
 console.log(obj instanceof Array);

 console.log(Array.isArray(arr));

 var Student = ['小明',18];

 //添加元素
 // 方法1
 console.log(Student);
 var length = Student.push(90,'hobby');
 console.log(Student);
 console.log(length);

 // 方法2
 var length1 = Student.unshift('下棋','打篮球');
 console.log(Student);
 console.log(length1);


 //删除元素
 // 方法1:
 var span = Student.pop();
 console.log(span);
 console.log(Student);

 // 方法2：
 var span1 = Student.shift();
 console.log(span1);
 console.log(Student);