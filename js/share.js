wx.config({
    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: '{$appid}', // 必填，公众号的唯一标识
    timestamp: "{$signPackage.timestamp}", // 必填，生成签名的时间戳
    nonceStr: '{$signPackage.nonceStr}', // 必填，生成签名的随机串
    signature: '{$signPackage.signature}',// 必填，签名，见附录1
    jsApiList: [
        'checkJsApi',
        'onMenuShareTimeline',
        'onMenuShareAppMessage',
        'onMenuShareQQ',
        'onMenuShareWeibo'
    ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
});
wx.ready(function () {
    wx.onMenuShareTimeline({
        title: '--{$info.name}', // 分享标题
        link: '{$url}__URL__/index?pid={$pid}&puid={$uid}', // 分享链接,将当前登录用户转为puid,以便于发展下线
        imgUrl: '{$url}__PUBLIC__/Uploads/{$goodsvo.image}', // 分享图标
        success: function () {
            // 用户确认分享后执行的回调函数
            alert('分享成功');
        },
        cancel: function () {
            // 用户取消分享后执行的回调函数
        }
    });
    wx.error(function(res){
        // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
        // alert("errorMSG:"+res);
    });
});

// wx.onMenuShareTimeline({
//     title: '测测你的少女值吧~', // 分享标题
//     link: 'http://shonlin.github.io/WeeklyDiscussionsRecord/demo/index.html', // 分享链接
//     imgUrl: '../image/share.jpg', // 分享图标
//     success: function () {
//         // 用户确认分享后执行的回调函数
//     },
//     cancel: function () {
//         // 用户取消分享后执行的回调函数
//     }
// });
// // 获取“分享给朋友”按钮点击状态及自定义分享内容接口
// wx.onMenuShareAppMessage({
//     title: '', // 分享标题
//     desc: '', // 分享描述
//     link: '', // 分享链接
//     imgUrl: '', // 分享图标
//     type: '', // 分享类型,music、video或link，不填默认为link
//     dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
//     success: function () {
//         // 用户确认分享后执行的回调函数
//     },
//     cancel: function () {
//         // 用户取消分享后执行的回调函数
//     }
// });
// // 获取“分享到QQ”按钮点击状态及自定义分享内容接口
// wx.onMenuShareQQ({
//     title: '', // 分享标题
//     desc: '', // 分享描述
//     link: '', // 分享链接
//     imgUrl: '', // 分享图标
//     success: function () {
//         // 用户确认分享后执行的回调函数
//     },
//     cancel: function () {
//         // 用户取消分享后执行的回调函数
//     }
// });
// // 获取“分享到腾讯微博”按钮点击状态及自定义分享内容接口
// wx.onMenuShareWeibo({
//     title: '', // 分享标题
//     desc: '', // 分享描述
//     link: '', // 分享链接
//     imgUrl: '', // 分享图标
//     success: function () {
//         // 用户确认分享后执行的回调函数
//     },
//     cancel: function () {
//         // 用户取消分享后执行的回调函数
//     }
// });
// // 获取“分享到QQ空间”按钮点击状态及自定义分享内容接口
// wx.onMenuShareQZone({
//     title: '', // 分享标题
//     desc: '', // 分享描述
//     link: '', // 分享链接
//     imgUrl: '', // 分享图标
//     success: function () {
//         // 用户确认分享后执行的回调函数
//     },
//     cancel: function () {
//         // 用户取消分享后执行的回调函数
//     }
// });