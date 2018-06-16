$(document).ready(function getBlog() {
    console.log('获取博客信息');

    /*    if(sessionStorage.getItem('username')){
            $('.hideli').hide();
        }*/

    var user_email = sessionStorage.getItem('email');
    var data = {'user_email': user_email, 'm': 0};
    var imgurl = 'http://pa1hj9wpk.bkt.clouddn.com/1.jpg';

    console.log(data);
    $.ajax({
        url: '/getallblog',
        async: true,
        type: 'POST',
        data: {'m': 0},
        success: function (data) {
            console.log(data);
            $(function () {
                $('#user_name').text(sessionStorage.getItem('username'));
                $('#user_email').text(user_email);
                $('#user_qq').text(sessionStorage.getItem('user_qq'));
                $('#user_address').text(sessionStorage.getItem('user_address'));
                $('#user_github').text(sessionStorage.getItem('user_github'));
            });

            $.each(data, function (key, value) {
                console.log(value);
                if ((value.blog_picture) != null) {
                    $('.editTool').after('<div class="rv b agz">\n' +
                        '                    <img class="bos vb yb aff" src="/views/static/img/avatar-dhg_1.png">\n' +
                        '                    <div class="rw">\n' +
                        '                        <div class="bpb">\n' +
                        '                            <small class="acx axc">' + value.blog_time + '</small>\n' +
                        '                            <h6>'+value.blog_author+'</h6>\n' +
                        '                        </div>\n' +
                        '<p>' + value.blog_content + '</p>\n' +
                        '<img src=' + imgurl + '>\n' +

                        '                    </div>\n' +
                        '                </div>');
                } else {
                    $('.editTool').after('<div class="rv b agz">\n' +
                        '                    <img class="bos vb yb aff" src="/views/static/img/avatar-dhg_1.png">\n' +
                        '                    <div class="rw">\n' +
                        '                        <div class="bpb">\n' +
                        '                            <small class="acx axc">' + value.blog_time + '</small>\n' +
                        '                            <h6>'+value.blog_author+'</h6>\n' +
                        '                        </div>\n' +
                        '<p>' + value.blog_content + '</p>\n' +
                        '                    </div>\n' +
                        '                </div>');
                }

            })
        },
        error: function () {
            console.log('请求失败');
        },
        dataType: 'json'
    })
});

/*退出账户*/
function logout() {
    alert('tuichu');
    console.log('进入退出方法');
    $.ajax({
        url: '/logout',
        async: true,
        success: function (data) {
            sessionStorage.clear();
            alert('退出账户');
        },
        error: function () {
            console.log('退出失败');
        },
        dataType: 'json'
    })
}

// 初始化七牛上传的方法
function uploadInit() {
    var btnId = editor.imgMenuId;
    var containerId = editor.toolbarElemId;
    var textElemId = editor.textElemId;

    // 创建上传对象
    var uploader = Qiniu.uploader({
        runtimes: 'html5,flash,html4',    //上传模式,依次退化
        browse_button: btnId,       //上传选择的点选按钮，**必需**
        uptoken_url: '/uptoken',    //获取uptoken
        //uptoken: 'npYadwnTPCi7Ik5T4YcR_j9ozf_C4jCWJTx6hxuf:aqcXRjx4qhxQfHeJxq9Fcst7U04=:eyJzY29wZSI6InNpbXBsZS1ibG9nIiwiZGVhZGxpbmUiOjE1Mjg3Mzg2NDl9',
        //Ajax请求upToken的Url，**强烈建议设置**（服务端提供）
        // uptoken : '<Your upload token>',
        //若未指定uptoken_url,则必须指定 uptoken ,uptoken由其他程序生成
        // unique_names: true,
        // 默认 false，key为文件名。若开启该选项，SDK会为每个文件自动生成key（文件名）
        // save_key: true,
        // 默认 false。若在服务端生成uptoken的上传策略中指定了 `sava_key`，则开启，SDK在前端将不对key进行任何处理
        domain: 'http://pa1hj9wpk.bkt.clouddn.com/',
        //bucket 域名，下载资源时用到，**必需**
        container: containerId,           //上传区域DOM ID，默认是browser_button的父元素，
        max_file_size: '100mb',           //最大文件体积限制
        flash_swf_url: '../upLoadImg/plupload/Moxie.swf',  //引入flash,相对路径
        filters: {
            mime_types: [
                //只允许上传图片文件 （注意，extensions中，逗号后面不要加空格）
                {title: "图片文件", extensions: "jpg,gif,png,bmp"}
            ]
        },
        max_retries: 3,                   //上传失败最大重试次数
        dragdrop: true,                   //开启可拖曳上传
        drop_element: textElemId,        //拖曳上传区域元素的ID，拖曳文件或文件夹后可触发上传
        chunk_size: '4mb',                //分块上传时，每片的体积
        auto_start: true,                 //选择文件后自动上传，若关闭需要自己绑定事件触发上传
        init: {
            'FilesAdded': function (up, files) {
                plupload.each(files, function (file) {
                    // 文件添加进队列后,处理相关的事情
                    printLog('on FilesAdded');
                });
            },
            'BeforeUpload': function (up, file) {
                // 每个文件上传前,处理相关的事情
                printLog('on BeforeUpload');
            },
            'UploadProgress': function (up, file) {
                // 显示进度
                printLog('进度 ' + file.percent)
            },
            'FileUploaded': function (up, file, info) {
                // 每个文件上传成功后,处理相关的事情
                // 其中 info 是文件上传成功后，服务端返回的json，形式如
                // {
                //    "hash": "Fh8xVqod2MQ1mocfI4S4KpRL6D98",
                //    "key": "gogopher.jpg"
                //  }
                printLog(info);
                // 参考http://developer.qiniu.com/docs/v6/api/overview/up/response/simple-response.html

                var domain = up.getOption('domain');
                var res = $.parseJSON(info);
                var sourceLink = domain + res.key; //获取上传成功后的文件的Url

                printLog(sourceLink);

                // 插入图片到editor
                editor.cmd.do('insertHtml', '<img src="' + sourceLink + '" style="max-width:100%;"/>')
            },
            'Error': function (up, err, errTip) {
                //上传出错时,处理相关的事情
                printLog('on Error');
            },
            'UploadComplete': function () {
                //队列文件处理完毕后,处理相关的事情
                printLog('on UploadComplete');
            }
            // Key 函数如果有需要自行配置，无特殊需要请注释
            //,
            // 'Key': function(up, file) {
            //     // 若想在前端对每个文件的key进行个性化处理，可以配置该函数
            //     // 该配置必须要在 unique_names: false , save_key: false 时才生效
            //     var key = "";
            //     // do something with key here
            //     return key
            // }
        }
    });
    // domain 为七牛空间（bucket)对应的域名，选择某个空间后，可通过"空间设置->基本设置->域名设置"查看获取
    // uploader 为一个plupload对象，继承了所有plupload的方法，参考http://plupload.com/docs
}

// 封装 console.log 函数
function printLog(title, info) {
    window.console && console.log(title, info);
}

/*发布文章*/
function publish() {
    if (sessionStorage.getItem('email') != null) {
            alert("开始发布");
            console.log(editor.txt.html());
            var user_email = sessionStorage.getItem('email');
            var user_name=sessionStorage.getItem('username');
            var blog = editor.txt.html();
            var upTime = getNowFormatDate();
            console.log(user_name);
            //首先发布至页面
            var addBlogData = {'user_email': user_email,'blog_author':user_name,'blog_content': blog, 'blog_time': upTime};
            console.log(addBlogData);
            //将博客信息存入数据库
            $.ajax({
                url: '/addblog',
                async: true,
                type: 'POST',
                data: addBlogData
            });
            //博客展示在页面
            $('.editTool').after('<div class="rv b agz">\n' +
                '                    <img class="bos vb yb aff" src="/views/static/img/avatar-dhg_1.png">\n' +
                '                    <div class="rw" style="max-width:774.5px">\n' +
                '                        <div class="bpb">\n' +
                '                            <small class="acx axc">' + upTime + '</small>\n' +
                '                            <h6>'+user_name+'</h6>\n' +
                '                        </div>\n' +
                editor.txt.html() +
                '                    </div>\n' +
                '                </div>');

            editor.txt.clear();
    }else{
        alert('请登录账户！')
    }

}
