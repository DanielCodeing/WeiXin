//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-2015, Egret Technology Inc.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        _super.apply(this, arguments);
        this.vparm = "";
    }
    var d = __define,c=Main;p=c.prototype;
    p.createChildren = function () {
        _super.prototype.createChildren.call(this);
        //inject the custom material parser
        //注入自定义的素材解析器
        var assetAdapter = new AssetAdapter();
        this.stage.registerImplementation("eui.IAssetAdapter", assetAdapter);
        this.stage.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
        //Config loading process interface
        // initialize the Resource loading library
        //初始化Resource资源加载库
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
    };
    /**
     * 配置文件加载完成,开始预加载preload资源组。
     * Loading of configuration file is complete, start to pre-load the preload resource group
     */
    p.onConfigComplete = function (event) {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        // load skin theme configuration file, you can manually modify the file. And replace the default skin.
        //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
        new eui.Theme("resource/default.thm.json", this.stage);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.loadGroup("loading");
    };
    /**
     * preload资源组加载完成
     * preload resource group is loaded
     */
    p.onResourceLoadComplete = function (event) {
        if (event.groupName == "preload") {
            this.stage.removeChild(this.loadingView);
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            this.createScene();
        }
        else if (event.groupName == "loading") {
            //设置加载进度界面
            this.loadingView = new LoadingUI();
            this.stage.addChild(this.loadingView);
            RES.loadGroup("preload");
        }
    };
    /**
     * 资源组加载出错
     * Resource group loading failed
     */
    p.onResourceLoadError = function (event) {
        //TODO
        console.warn("Group:" + event.groupName + " has failed to load");
        //忽略加载失败的项目
        //ignore loading failed projects
        this.onResourceLoadComplete(event);
    };
    /**
     * preload资源组加载进度
     * loading process of preload resource
     */
    p.onResourceProgress = function (event) {
        if (event.groupName == "preload") {
            this.loadingView.setProgress(event.itemsLoaded, event.itemsTotal);
        }
    };
    /**
     * 创建场景界面
     * Create scene interface
     */
    p.createScene = function () {
        //游戏场景层，游戏场景相关内容可以放在这里面。
        //Game scene layer, the game content related to the scene can be placed inside this layer.
        this.gameLayer = new egret.DisplayObjectContainer();
        this.addChild(this.gameLayer);
        this.euiLayer = new eui.UILayer();
        this.addChild(this.euiLayer);
        this.tipsLayer = new egret.DisplayObjectContainer();
        this.addChild(this.tipsLayer);
        PanelManager.gameLayer = this.gameLayer;
        PanelManager.guiLayer = this.euiLayer;
        PanelManager.tipsLayer = this.tipsLayer;
        this.createEffect();
        PanelManager.initMusic();
        this.createMusic();
        //        var start = new MoveManage([new StartPanel(),new StartPanel2()]);
        //        PanelManager.guiLayer.addChild(start);
        var start = new StartPanel();
        PanelManager.guiLayer.addChild(start);
        //PanelManager.openMuisc();
        var sdk = new JSSDK();
        sdk.init();
        GlobalData.jssdk = sdk;
        //        this.initData();
    };
    p.createMusic = function () {
        if (!this.btnMusic) {
            this.btnMusic = new eui.Image("btnMusic");
        }
        PanelManager.tipsLayer.addChild(this.btnMusic);
        PanelManager.tipsLayer.addEventListener(egret.Event.ENTER_FRAME, this.gogo, this);
        this.btnMusic.addEventListener(egret.TouchEvent.TOUCH_TAP, this.click, this);
        PanelManager.playMessageMuisc(1);
        this.btnMusic.anchorOffsetX = 28;
        this.btnMusic.anchorOffsetY = 28;
        this.btnMusic.y = 51;
        this.btnMusic.x = 578;
    };
    p.click = function () {
        if (PanelManager.tipsLayer.hasEventListener(egret.Event.ENTER_FRAME)) {
            PanelManager.tipsLayer.removeEventListener(egret.Event.ENTER_FRAME, this.gogo, this);
            PanelManager.closeMessageMuisc();
        }
        else {
            PanelManager.tipsLayer.addEventListener(egret.Event.ENTER_FRAME, this.gogo, this);
            PanelManager.playMessageMuisc(1);
        }
    };
    p.gogo = function () {
        this.btnMusic.rotation += 2;
    };
    p.createEffect = function () {
        if (!this.btnNext) {
            this.btnNext = new eui.Image("btnNext");
        }
        PanelManager.tipsLayer.addChild(this.btnNext);
        this.btnNext.y = 890;
        this.btnNext.x = 260;
        this.btnNext.alpha = 1;
        egret.Tween.get(this.btnNext).to({ y: 826, alpha: 0 }, 1500).call(this.playEffect.bind(this));
    };
    p.playEffect = function () {
        this.btnNext.y = 890;
        this.btnNext.alpha = 1;
        egret.Tween.get(this.btnNext).to({ y: 826, alpha: 0 }, 1500).call(this.playEffect.bind(this));
    };
    p.initData = function () {
        GlobalData.openid = "123456";
        this.getInfo("123456", "fany");
        return;
        //var openId: string = this.$GET("openid");
        var ss = window["getJsonData"]();
        var obj = JSON.parse(ss);
        GlobalData.openid = obj.openid;
        //alert(GlobalData.openid);
        this.getInfo(GlobalData.openid, obj.nickname);
    };
    p.getInfo = function (openid, nickname) {
        //alert(obj.headimgurl)
        this.vparm = "http://139.129.24.10:82/free/user";
        Network.sendInfo("http://139.129.24.10:82/free/user", "openid=" + openid + "&nickname=" + nickname);
        lcp.LListener.getInstance().addEventListener(this.vparm, this.getInfoSucc, this);
    };
    p.getInfoSucc = function (e) {
        lcp.LListener.getInstance().removeEventListener(this.vparm, this.getInfoSucc, this);
        var obj = JSON.parse(e.param);
    };
    p.$GET = function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = location.search.substr(1).match(reg);
        if (r != null)
            return decodeURI(decodeURIComponent(decodeURI(r[2])));
        return "";
    };
    return Main;
})(eui.UILayer);
egret.registerClass(Main,"Main");
