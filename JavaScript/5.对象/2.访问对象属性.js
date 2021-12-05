/*
* 访问属性
* 
* 方法1：
*  语法：对象.属性名
*  如果读取对象中没有的属性，不会报错，而是返回undefined
* 
* 方法2：
*   语法：对象["属性名"]
*       属性名必须加引号
* 
* 如果访问的属性不存在，不会报错，返回的是undefined
*/

/*
访问匿名函数
    使用匿名函数的键表示匿名函数
    如果使用第二种方式访问的对象是方法，可以先把值赋值给一个变量，然后用这个变量执行函数
    也可以直接在中括号后面加小括号执行执行函数

访问方法
    也是使用方法的键表示函数
    无论是用那种方法，不可以使用value访问函数，只能使用key调用方法
 */

function print(string){
    console.log(string);
}

function sub(x,y){
    return x - y
}

var person = {
    name:'小明',
    age:19,
    gender:'boy',
    hobby:['打篮球','下棋','看电视'],
    grade:{
        Chinese:89,
        Math:90.5,
        English:79
    },
    count:sub,
    figure:(function(x,y){
        return x + y
    })
}

print(person);

// 访问属性
// 方法1
print(person.age);
print(person.hobby);
print(person.grade);
print(person.figure(7,9));

// 方法2
print(person['age']);
print(person['hobby']);
print(person['grade']);

// 使用中间变量接收函数
var sum = person['figure'];
print(sum(5,9));

// 直接执行函数
print(person['figure'](45,29));
print('\n');

print(person.count(42,27));
print(person["count"](256,83));