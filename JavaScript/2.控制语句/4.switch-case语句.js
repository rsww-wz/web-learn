/**
 * switch-case的语法和C语言的语法也是一样的
 */

var flag;
flag = prompt();
flag = Number(flag);

switch(flag){
    case 1 : console.log("hello");break;
    case 2 : console.log("world");break;
    case 3 : console.log("hello world");break;
    default : console.log("你输错啦！");
}

var span = Infinity;
switch(span % 2){
    case 0 :
        console.log("这是偶数");
        break;
    case 1 :
        console.log("这是奇数");
        break;
    default:
        console.log("未知数");
}
