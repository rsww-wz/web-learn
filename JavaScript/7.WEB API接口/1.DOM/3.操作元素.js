/*
修改元素内容
    函数：element.innerText()
    作用：获取标签内容，去除HTML标签，同时去除空格和换行

    如果没有注册时间，页面刷新就会显示修改的文本
    注意：这个函数不识别HTML标签，里面的标签会直接显示

    函数:element.innerHTML()
        element.innerHTML()可以识别HTML标签
        这个函数支持所有浏览器，element.innerText()不支持所有浏览器
        推荐使用element.innerHTML()

    element.innerText()，element.innerHTML()都是可读写的函数
    即可以值获取内容，不修改内容
    但是element.innerText()不识别标签和空白符，element.innerHTML()识别标签和空白符

修改元素属性
    获取元素的标签和属性
    注册标签，修改属性即可


*/