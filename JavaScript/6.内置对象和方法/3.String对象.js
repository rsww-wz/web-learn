/**
 * 基本包装类型
 *  把简单数组类型，包装成复杂数据类型
 *  包装过程：
 *      var temp = new String('字符串')
 *      str = temp
 *      temp = null (销毁临时变量)
 * 
 * JavaScript中有三种基本包装类型：Number，String，Boolean
 * 
 * 字符串的基本性质
 *  不可变，不可以修改，如果修改了字符串要把修改后的字符串赋值给原来的变量
 * 
 * 根据字符返回位置
 *  str.indexOf('要查找的字符',[起始位置])       []表示可选参数
 *  str.lastIndexOf('要查找的字符',[起始位置])
 * 
 * 根据位置返回字符
 *  charAt(索引号)：返回该位置的字符
 *  charCodeAt(索引号) ：返回该位置字符的ASCII
 *      作用：判断用户的键盘输入
 *  str[索引号]
 * 
 * 字符串拼接
 *  concat(str1,str2,str3……)：连接多个字符串，相等于+拼接字符串
 * 
 * 字符串截取
 *  substr(start,length):从start位置开始，length取的个数
 *  slice(start,end):从start位置开始，截取到end位置，end取不到
 *  substring(start,end):从start位置开开始，截取到end位置，end取不到，不接受负值
 * 
 * 替换字符串
 *   replace('要替换','替换成')  
 *       -- python的replace一样，只替换第一个字符
 * 
 * 字符串转化为数组(字符串切分)
 *    split('分隔符')
 * 
 * 大小写转化
 *  toUpperCase()   -- 转化为大写
 *  toLowerCase()   -- 转化为小写
 */