/**
 * 日期对象
 * 
 * 只能通过构造函数来创建日期对象
 * Data()是一个构造函数
 *  如果没有参数，返回的当前时间
 *  如果有参数表示输出指定日期
 *  参数：
 *      数字型：2020,10,01
 *      字符串型：'2019-10-01 8:30:45'
 * 注意：如果用的数字型，返回的月份，小一个月，是从零开始的，记得月份加1
 * 返回的都是系统格式化的日期
 * 
 * 格式化日期
 *  obj.getFullYear() -- 年份
 *  obj.getMonth() -- 月份 小1
 *  obj.getDate()  -- 日期  
 *  obj.getDay()  -星期  周日是0 ，其他对应
 * 
 *  obj.getHours()  -- 小时
 *  obj.getMinutes()  -- 分钟
 *  obj.getSeconds()  -- 秒数
 * 
 *  获得时间戳
 *  obj.valueOf() -- 1970到现在经过的毫秒数
 *  obj.getTime() -- 1970到现在经过的毫秒数
 *  var second =+ new Date(),可以有参数，最常用的写法
 *  Data.now() -- 1970到现在经过的毫秒数
 */

var date = new Date();
console.log(date);

var data1 = new Date(2020,10,01);
console.log(data1);

var date2 = new Date('2020-5-01 23:45:20');
console.log(date2);

// 年月日
// 注意，返回的月份小一个月，是从零开始的
var year = new Date();
console.log(year.getFullYear());
console.log(year.getMonth());
console.log(year.getDate());
console.log(year.getDay());

// 格式化日期
var now = new Date();
var Year = now.getFullYear();
var Month = now.getMonth() + 1;
var date = now.getDate();
var week = now.getDay();
var Week = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];

console.log(Year+"年"+Month+"月"+date+"日 "+Week[week]);

// 时分秒
var time = new Date();
console.log(time.getHours());
console.log(time.getMinutes());
console.log(time.getSeconds());

// 格式化时分秒

function getTime(){
    var times = new Date();
    var h = times.getHours();
    h = h < 10? '0' + h : h;
    var m = times.getMinutes();
    m = m < 10? '0' + m : m;
    var s = times.getSeconds();
    s = s < 10? '0' + s : s;

    time = h + ':' + m + ':' + s
    return time
}

console.log(getTime());

// 时间戳
// 方法1
var second = new Date();
console.log(second.getTime());

// 方法2
console.log(second.valueOf());

// 方法3
var second1 =+ new Date();
console.log(second1);

// 方法4
console.log(Date.now())

// 倒计时函数
// 思路：将来的时间戳-现在的时间戳，再把时间戳转化为日期
function countDown(time){
    var nowTime =+ new Date();         // 现在时间戳
    var userTime =+ new Date(time);    // 用户时间戳
    var spaceTime = (userTime - nowTime) / 1000;   // 剩余秒数

    var d = parseInt(spaceTime / 60 / 60 / 24);
    d = d < 10? '0'+d:d;
    var h = parseInt(spaceTime / 60 / 60 % 24);
    h = h < 10? '0'+h:h;
    var m = parseInt(spaceTime / 60 % 60);
    m = m < 10? '0'+m:m;
    var s = parseInt(spaceTime % 60);
    s = s < 10? '0'+s:s;

    return d + '天' + h + '时' + m + '分' + s + '秒';
}

var count = countDown('2020-11-20 0:0:0');
console.log(count);