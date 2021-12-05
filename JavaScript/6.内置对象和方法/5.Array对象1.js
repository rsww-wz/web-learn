/**
 * 反转数组
 *  函数：obj.reverse()
 *  作用：反转数组
 * 
 * 数组排序
 *  函数：obj.sort()
 *  作用：元素按字符串排序，不是按数字大小排序
 *  如果要按数字大小排序，可以用一个函数做参数，函数体是return a-b
 * 
 * 数组索引
 *  函数：indexOf()
 *  作用：给数组元素，返回元素下标
 *  如果有两个相同的元素，只返回第一个满足条件的索引号
 *  如果没有这个元素，返回-1
 * 
 *  函数：lastIndexOf()
 *  作用：从后索引数组，但是索引号还是正向开始的
 * 
 * 去除数组重复元素
 *  算法：遍历就数组，拿着就数组的元素访问新数组是否有这个数，如果没有就添加，有就跳过
 * 
 * 数组转化为字符串
 *  方法1
 *      函数：obj.toString()
 *      默认以逗号分隔
 *  方法2
 *      函数：obj.join('分隔符')
 *      默认也是用逗号分隔
 * 
 * concat():连接两个或者多个数组，不影响原数组，返回一个新的数组
 * slice():数组的截取，slice(begin,end),返回被截取项目的新数组
 * splice():数组删除splice(第几个开始，要删除个数),返回被删除项目的新数组，会影响原数组
 * 
 */

 var arr = [34,75,2,7,2,4,8,435,387,9];

 console.log(arr);

 arr.reverse();
 console.log(arr);

 arr.sort();
 console.log(arr);

 arr.sort(function (a,b){
            // return a - b      // 升序排序
            return b - a      // 降序排序
 })

 console.log(arr);

 var arr1 = ['小明','小红','张三丰','张无忌','郭靖','杨过'];
 var index = arr1.indexOf('张三丰');
 console.log(index);

 var lastIndex = arr1.lastIndexOf('张三丰');
 console.log(lastIndex);

 //数组去重

 function unique(arr) {
     var newArr = [];
     for(var i = 0; i < arr.length; i++)  {
         if (newArr.indexOf(arr[i]) === -1){
             newArr.push(arr[i]);
         }
     }
     return newArr
 }

 console.log(unique(arr));

 var lst = [1,6,9];
 console.log(lst.toString());

 console.log(lst.join('&'));