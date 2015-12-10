/**
* Created by d8q8 on 2015/1/19.
* @class JSSDK
* @constructor
**/
var JSSDK = (function () {
    function JSSDK() {
        this.CLASS_NAME = "JSSDK";
    }
    var d = __define,c=JSSDK;p=c.prototype;
    /**
    * 初始化
    **/
    p.init = function () {
        var data = RES.getRes("config_json");
        var ss = location.href.split("#")[0];
        //初始化分享内容
        //this.title =  "【分享】配对科技答题,敢来吗"+GlobalData.gameID+"==userid"+GlobalData.user.openid;
        this.title = data.data.title1;
        this.desc = data.data.des1;
        this.title1 = data.data.title2;
        this.desc1 = data.data.des2;
        this.link = ss;
        //this.link =  data.data.link+GlobalData.user.openid+"&gameID="+GlobalData.gameID;
        //alert(this.link)
        //this.link =  "http://www.zhegoubao.com/game/index.html";
        this.imgUrl = data.data.imgurl;
        //alert(this.imgUrl)
        //alert(ss);
        //你的后端数据JSON入口
        this.url = data.data.shareurl;
        Network.sendInfo(this.url, "url=" + encodeURIComponent(ss), egret.URLRequestMethod.GET);
        lcp.LListener.getInstance().addEventListener(this.url, this.getSignPackage, this);
        //获取签名
        //this.getSignPackage();
    };
    p.setTitle = function () {
        var data = RES.getRes("config_json");
        this.title = data.data.title3 + GlobalData.score + data.data.title3_1;
        this.desc = data.data.title3 + GlobalData.score + data.data.title3_1;
        this.title1 = data.data.title3 + GlobalData.score + data.data.title3_1;
        this.desc1 = data.data.title3 + GlobalData.score + data.data.title3_1;
        this.link = data.data.link;
        this.imgUrl = data.data.imgurl;
        var ss = location.href.split("#")[0];
        //你的后端数据JSON入口
        this.url = data.data.shareurl;
        //alert(this.url);
        Network.sendInfo(this.url, "url=" + encodeURIComponent(ss), egret.URLRequestMethod.GET);
        lcp.LListener.getInstance().addEventListener(this.url, this.getSignPackage, this);
    };
    /**
    * 获取签名分享
    */
    p.getSignPackage = function (e) {
        this.signPackage = JSON.parse(e.param);
        //........................................................
        window["setWxConfig"](this.signPackage);
        window["setShare"](this.title, this.desc, this.imgUrl, this.link);
        //基本配置
        //this.getWeiXinConfig();
        //wx.ready(this.getWeiXinShareTimeline.bind(this));
        //下面可以加更多接口,可自行扩展
        //this.getWeiXinShareTimeline();//分享朋友圈
        //this.getWeiXinShareAppMessage();//分享朋友
        //this.getWeiXinShareQQ();//分享QQ
        //this.getWeiXinShareWeiBo();//分享到腾讯微博
        //........................................................
    };
    /**
    * 获取微信配置
    */
    p.getWeiXinConfig = function () {
        /*
    * 注意：
    * 1. 所有的JS接口只能在公众号绑定的域名下调用，公众号开发者需要先登录微信公众平台进入“公众号设置”的“功能设置”里填写“JS接口安全域名”。
    * 2. 如果发现在 Android 不能分享自定义内容，请到官网下载最新的包覆盖安装，Android 自定义分享接口需升级至 6.0.2.58 版本及以上。
    * 3. 完整 JS-SDK 文档地址：http://mp.weixin.qq.com/wiki/7/aaa137b55fb2e0456bf8dd9148dd613f.html
    *
    * 如有问题请通过以下渠道反馈：
    * 邮箱地址：weixin-open@qq.com
    * 邮件主题：【微信JS-SDK反馈】具体问题
    * 邮件内容说明：用简明的语言描述问题所在，并交代清楚遇到该问题的场景，可附上截屏图片，微信团队会尽快处理你的反馈。
    */
        //配置参数
        var bodyConfig = new BodyConfig();
        bodyConfig.debug = false; // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        bodyConfig.appId = this.signPackage.appId; // 必填，公众号的唯一标识
        bodyConfig.timestamp = this.signPackage.timestamp; // 必填，生成签名的时间戳
        bodyConfig.nonceStr = this.signPackage.nonceStr; // 必填，生成签名的随机串
        bodyConfig.signature = this.signPackage.signature; // 必填，签名，见附录1
        bodyConfig.jsApiList = [
            'checkJsApi',
            'onMenuShareTimeline',
            'onMenuShareAppMessage',
            'onMenuShareQQ',
            'onMenuShareWeibo',
            'hideMenuItems',
            'showMenuItems',
            'hideAllNonBaseMenuItem',
            'showAllNonBaseMenuItem',
            'translateVoice',
            'startRecord',
            'stopRecord',
            'playVoice',
            'pauseVoice',
            'stopVoice',
            'uploadVoice',
            'downloadVoice',
            'chooseImage',
            'previewImage',
            'uploadImage',
            'downloadImage',
            'getNetworkType',
            'openLocation',
            'getLocation',
            'hideOptionMenu',
            'showOptionMenu',
            'closeWindow',
            'scanQRCode',
            'chooseWXPay',
            'openProductSpecificView',
            'addCard',
            'chooseCard',
            'openCard'
        ];
        wx.config(bodyConfig);
    };
    /**
    * 获取微信分享到朋友圈
    */
    p.getWeiXinShareTimeline = function () {
        //alert('参数查看'+this.title+"=="+this.link+"=="+this.imgUrl);
        var bodyMenuShareTimeline = new BodyMenuShareTimeline();
        bodyMenuShareTimeline.title = this.desc;
        bodyMenuShareTimeline.link = this.link;
        bodyMenuShareTimeline.imgUrl = this.imgUrl;
        bodyMenuShareTimeline.trigger = function () {
            //alert("分享的链接是:"+this.link);
            // alert("分享图标链接是:" + this.imgUrl);
            //alert('用户点击分享到朋友圈');
            PanelManager.getInfo();
        };
        bodyMenuShareTimeline.success = function () {
            //alert('已分享');
        };
        bodyMenuShareTimeline.cancel = function () {
            //alert('已取消');
        };
        bodyMenuShareTimeline.fail = function (res) {
            //alert(JSON.stringify(res));
        };
        wx.onMenuShareTimeline(bodyMenuShareTimeline);
        var bodyMenuShareAppMessage = new BodyMenuShareAppMessage();
        bodyMenuShareAppMessage.title = this.desc1;
        bodyMenuShareAppMessage.desc = this.title1;
        bodyMenuShareAppMessage.link = this.link;
        bodyMenuShareAppMessage.imgUrl = this.imgUrl;
        bodyMenuShareAppMessage.trigger = function () {
            //alert('用户点击发送给朋友');
            PanelManager.getInfo();
        };
        bodyMenuShareAppMessage.success = function () {
            //alert('已分享');
        };
        bodyMenuShareAppMessage.cancel = function () {
            //alert('已取消');
        };
        bodyMenuShareAppMessage.fail = function (res) {
            //alert(JSON.stringify(res));
        };
        wx.onMenuShareAppMessage(bodyMenuShareAppMessage);
        //        var shareData64 = {
        //            title: this.title,                         //必填,分享标题
        //            desc: this.desc,                          //选填,分享描述
        //            imgUrl: this.imgUrl,                        //选填,分享图片
        //            link: this.link, //必填,可跟get参数,禁止直接使用location.href
        //            success: function() { 
        //                // 用户确认分享后执行的回调函数
        //            },
        //            cancel: function() { 
        //                // 用户取消分享后执行的回调函数
        //            }
        //        };
        //        wx.onMenuShareAppMessage(tar.shapeShareAppMessage(shareData64));
        //        wx.onMenuShareTimeline(tar.shapeShareTimeline(shareData64));
    };
    /**
    * 获取微信分享到朋友
    */
    p.getWeiXinShareAppMessage = function () {
        var bodyMenuShareAppMessage = new BodyMenuShareAppMessage();
        bodyMenuShareAppMessage.title = this.title;
        bodyMenuShareAppMessage.desc = this.desc;
        bodyMenuShareAppMessage.link = this.link;
        bodyMenuShareAppMessage.imgUrl = this.imgUrl;
        bodyMenuShareAppMessage.trigger = function () {
            alert('用户点击发送给朋友');
        };
        bodyMenuShareAppMessage.success = function () {
            alert('已分享');
        };
        bodyMenuShareAppMessage.cancel = function () {
            alert('已取消');
        };
        bodyMenuShareAppMessage.fail = function (res) {
            alert(JSON.stringify(res));
        };
        wx.onMenuShareAppMessage(bodyMenuShareAppMessage);
    };
    /**
    * 获取微信分享到QQ
    */
    p.getWeiXinShareQQ = function () {
        var bodyMenuShareQQ = new BodyMenuShareQQ();
        bodyMenuShareQQ.title = this.title;
        bodyMenuShareQQ.desc = this.desc;
        bodyMenuShareQQ.link = this.link;
        bodyMenuShareQQ.imgUrl = this.imgUrl;
        bodyMenuShareQQ.trigger = function () {
            alert('用户点击分享到QQ');
        };
        bodyMenuShareQQ.complete = function (res) {
            alert(JSON.stringify(res));
        };
        bodyMenuShareQQ.success = function () {
            alert('已分享');
        };
        bodyMenuShareQQ.cancel = function () {
            alert('已取消');
        };
        bodyMenuShareQQ.fail = function (res) {
            alert(JSON.stringify(res));
        };
        wx.onMenuShareQQ(bodyMenuShareQQ);
        alert('已注册获取“分享到QQ”状态事件');
    };
    /**
    * 获取微信分享到腾讯微博
    */
    p.getWeiXinShareWeiBo = function () {
        var bodyMenuShareWeibo = new BodyMenuShareWeibo();
        bodyMenuShareWeibo.title = this.title;
        bodyMenuShareWeibo.desc = this.desc;
        bodyMenuShareWeibo.link = this.link;
        bodyMenuShareWeibo.imgUrl = this.imgUrl;
        bodyMenuShareWeibo.trigger = function () {
            alert('用户点击分享到微博');
        };
        bodyMenuShareWeibo.complete = function (res) {
            alert(JSON.stringify(res));
        };
        bodyMenuShareWeibo.success = function () {
            alert('已分享');
        };
        bodyMenuShareWeibo.cancel = function () {
            alert('已取消');
        };
        bodyMenuShareWeibo.fail = function (res) {
            alert(JSON.stringify(res));
        };
        wx.onMenuShareWeibo(bodyMenuShareWeibo);
        alert('已注册获取“分享到微博”状态事件');
    };
    return JSSDK;
})();
egret.registerClass(JSSDK,"JSSDK");
