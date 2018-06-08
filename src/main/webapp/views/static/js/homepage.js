/*$(document).ready(function loginCheck() {
    console.log('Login Check!!!');

    if(sessionStorage.getItem('username')){
        $('.hideli').hide();
    }
/!*    $.ajax({
        url:'http://localhost:8080/loginCheck',
        async:true,
        success:function (data) {
            alert('请求成功');
            console.log(data);
            if (data.hasOwnProperty("ExceptionIfo")){
                alert(data.ExceptionIfo);
            }else {
                alert('未登录');
            }
        },
        error:function () {
            console.log('请求失败');
        },
        dataType:'json'
    })*!/
});*/

/*退出账户*/
function logoutt() {
    alert('tuichu');
    console.log('进入退出方法');
    $.ajax({
        url:'/logoutt',
        async:true,
        success:function (data) {
            sessionStorage.clear();
            alert('退出账户');
        },
        error:function () {
            console.log('退出失败');
        },
        dataType:'json'
    })
}

function buttont() {
    console.log('ceshihanshu ');
}