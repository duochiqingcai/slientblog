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
        url: '/logoutt',
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
        uptoken_url:'/uptoken',    //获取uptoken
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
    /*uploadInit();*/
    alert("开始发布");
    console.log(editor.txt.html());
    $('.editTool').append('<li class="rv b agz">\n' +
        '                    <img class="bos vb yb aff" src="/views/static/img/avatar-dhg_1.png">\n' +
        '                    <div class="rw">\n' +
        '                        <div class="bpb">\n' +
        '                            <small class="acx axc">4 min</small>\n' +
        '                            <h6>一个小码农</h6>\n' +
        '                        </div>\n' +
                                editor.txt.html()+
/*        '                        <p>\n' +
        '                            君不见，黄河之水天上来，奔流到海不复回。\n' +
        '                            君不见，高堂明镜悲白发，朝如青丝暮成雪。\n' +
        '                            人生得意须尽欢，莫使金樽空对月。\n' +
        '                            天生我材必有用，千金散尽还复来。\n' +
        '                            烹羊宰牛且为乐，会须一饮三百杯。\n' +
        '                            岑夫子，丹丘生，将进酒，杯莫停。\n' +
        '                            与君歌一曲，请君为我倾耳听。\n' +
        '                            钟鼓馔玉不足贵，但愿长醉不复醒。\n' +
        '                            古来圣贤皆寂寞，惟有饮者留其名。\n' +
        '                            陈王昔时宴平乐，斗酒十千恣欢谑。\n' +
        '                            主人何为言少钱，径须沽取对君酌。\n' +
        '                            五花马，千金裘，呼儿将出换美酒，与尔同销万古愁。\n' +
        '                        </p>\n' +*/
        /*'\n' +
        '                        <div class="boy" data-grid="images">\n' +
        '                            <div style="display: none">\n' +
        '                                <img data-action="zoom" data-width="1050" data-height="700"\n' +
        '                                     src="/views/static/img/unsplash_1.jpg">\n' +
        '                            </div>\n' +
        '\n' +
        '                            <div style="display: none">\n' +
        '                                <img data-action="zoom" data-width="640" data-height="640"\n' +
        '                                     src="/views/static/img/instagram_1.jpg">\n' +
        '                            </div>\n' +
        '\n' +
        '                            <div style="display: none">\n' +
        '                                <img data-action="zoom" data-width="640" data-height="640"\n' +
        '                                     src="/views/static/img/instagram_13.jpg">\n' +
        '                            </div>\n' +
        '\n' +
        '                            <div style="display: none">\n' +
        '                                <img data-action="zoom" data-width="1048" data-height="700"\n' +
        '                                     src="/views/static/img/unsplash_2.jpg">\n' +
        '                            </div>\n' +
        '                        </div>\n' +
        '\n' +                '<hr>'+
        '                        <ul class="bow afa">\n' +
        '                            <li class="rv afh">\n' +
        '                                <img\n' +
        '                                        class="bos vb yb aff"\n' +
        '                                        src="/views/static/img/avatar-fat.jpg">\n' +
        '                                <div class="rw">\n' +
        '                                    <strong>Jacon Thornton: </strong>\n' +
        '                                    Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue\n' +
        '                                    laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor\n' +
        '                                    fringilla. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed\n' +
        '                                    posuere consectetur est at lobortis.\n' +
        '                                </div>\n' +
        '                            </li>\n' +
        '                            <li class="rv">\n' +
        '                                <img\n' +
        '                                        class="bos vb yb aff"\n' +
        '                                        src="/views/static/img/avatar-mdo.png">\n' +
        '                                <div class="rw">\n' +
        '                                    <strong>Mark Otto: </strong>\n' +
        '                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac\n' +
        '                                    cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet\n' +
        '                                    risus.\n' +
        '                                </div>\n' +
        '                            </li>\n' +
        '                        </ul>\n' +*/
        '                    </div>\n' +
        '                </li>');
}
