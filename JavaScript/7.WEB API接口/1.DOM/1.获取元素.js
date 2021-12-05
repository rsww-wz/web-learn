/**
 * web api是浏览器提供的一套操作浏览器和页面元素的的api(DOM,BOM)
 *  主要对浏览器做交互效果，web api很多都是方法或者函数
 * 
 * DOM的全称：文档对象模型
 * 
 * 作用：js通过DOM来操作HTML文档的标准接口
 * 
 * 术语
 *    文档：一个网页就是一个文档，用document表示
 *    元素：HTML的标签，用elements表示
 *    结点：网页中所有内容都是结点，用node表示
 * 
 *    对象：将网页中的每一部分都转化为对象，以上所有内容都可以看做是对象
 *    模型：使用模型来表示对象之间的关系
 *     
 */

 /*
获取网页元素
    根据ID获取
        函数：document.getElementsByID(id)
        参数：id字符串
        返回值：获取到的标签，返回的是一个元素对象

    根据标签名获取
        函数：document.getElementByTagName(标签)
        参数：标签的字符串
        返回值：返回获取到的标签元素，以数组的形式存储
        注意：无论是否获取到元素，都以数组的形式返回，即使没有获取到任何元素

    获取指定标签下的指定元素
        函数：父元素.getElementByTagName(标签)
        参数，返回值同上
        注意：父元素必须是单个对象(用返回的数据要具体指明)，获取的时候不包括父元素自己

    通过HTML新增的方法获取(通过类选择器)
        函数：document.getElementsByClassName(类名)
        参数：类名的字符串形式
        返回值：返回获取的元素，也是返回数组的形式

        函数：document.querySelector(选择器)
        参数：选择器的字符串
        返回值：根据指定选择器，返回第一个元素对象

        函数：document.querySelectorAll(选择器)
        参数：选择器的字符串
        返回值：根据指定选择器，以数组的形式返回所有元素对象，

    特殊元素获取
        获取body标签
            函数：document.body()
        获取HTML标签
            函数：document.documentElement()

 */

 // 通过ID获取
