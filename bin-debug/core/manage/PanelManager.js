/**
  * 面板管理类
  * by dily
  * (c) copyright false,0,0,2014 - 2035
  * All Rights Reserved.
  * 面板的管理类
  */
var PanelManager;
(function (PanelManager) {
    PanelManager.loadingMc;
    PanelManager.gameLayer;
    PanelManager.tipsLayer;
    PanelManager.guiLayer;
    PanelManager.sound;
    PanelManager.channel;
    PanelManager.sound1;
    PanelManager.channel1;
    PanelManager.start;
    PanelManager.start2;
    PanelManager.start3;
    //export var game: GamePanel;
    // 初始化所有面板
    function initMusic() {
        this.sound = RES.getRes("bg_mp3");
        //        this.sound = RES.getRes("message_mp3");
        //        this.sound1 = RES.getRes("phone_mp3");
        //PanelManager.channel = PanelManager.sound.play(0,-1);
    }
    PanelManager.initMusic = initMusic;
    function playMessageMuisc(v) {
        this.closeMessageMuisc();
        this.channel = this.sound.play(0, -1);
        this.channel.volume = v;
    }
    PanelManager.playMessageMuisc = playMessageMuisc;
    function closeMessageMuisc() {
        if (this.channel) {
            this.channel.stop();
            this.channel = null;
        }
    }
    PanelManager.closeMessageMuisc = closeMessageMuisc;
    function playPhoneMuisc(v) {
        this.closePhoneMuisc();
        this.channel1 = this.sound1.play(0, 1);
        this.channel1.volume = v;
    }
    PanelManager.playPhoneMuisc = playPhoneMuisc;
    function closePhoneMuisc() {
        if (this.channel1) {
            this.channel1.stop();
            this.channel1 = null;
        }
    }
    PanelManager.closePhoneMuisc = closePhoneMuisc;
    function openGamePanel() {
        //        if(this.game) {
        //            this.game = null;
        //        }
        //        this.game = new GamePanel();
        //        PanelManager.guiLayer.addChild(this.game);
    }
    PanelManager.openGamePanel = openGamePanel;
    function openPanel(data) {
        //        Global.removeEventListener(MainNotify.openPanelNotify,this.openMainPanel,this);
        //        var view;
        //        switch(data.param.data )
        //        { 
        //            case "任务":
        //                view = new TaskPanel();
        //                break;
        //        }
        //        egret.gui.PopUpManager.addPopUp(view,true,true);
    }
    PanelManager.openPanel = openPanel;
    PanelManager.vparm = "";
    function getInfo() {
        //alert(obj.headimgurl)
        this.vparm = "http://139.129.24.10:82/jm/user";
        Network.sendInfo("http://139.129.24.10:82/jm/user", "openid=" + GlobalData.openid + "&shared=1");
        lcp.LListener.getInstance().addEventListener(this.vparm, this.getInfoSucc, this);
    }
    PanelManager.getInfo = getInfo;
    function getInfoSucc(e) {
        lcp.LListener.getInstance().removeEventListener(this.vparm, this.getInfoSucc, this);
        var obj = JSON.parse(e.param);
        //alert(e.param);
    }
    PanelManager.getInfoSucc = getInfoSucc;
    function initGame(data) {
        //        //console.log(data.param.data.data.hasOwnProperty("player"))
        //        if(data.param.hasOwnProperty("data")) {
        //            if(data.param.data.hasOwnProperty("player")) {
        //                UserInfoUtil.user = <UserInfo>data.param.data.player;
        //                PanelManager.gamelist.dispose();
        //                this.main = new MainPanel();
        //                PanelManager.guiLayer.addChild(this.main);
        //            }
        //        }
        //        else
        //        { 
        //            this.create = new CreateRolePanel();
        //            PanelManager.gamelist.dispose();
        //            PanelManager.guiLayer.addChild(this.create);
        //        }
        //        //console.log(data._obj.data.data.player);
        //        Global.removeEventListener(MainNotify.startGameNotify,this.initGame,this);
    }
    PanelManager.initGame = initGame;
    function showLoading(flag) {
        if (!this.loadingMc) {
            var data = RES.getRes("loading_json");
            var txtr = RES.getRes("loading_png");
            var mcFactory = new egret.MovieClipDataFactory(data, txtr);
            this.loadingMc = new egret.MovieClip(mcFactory.generateMovieClipData("loading"));
            this.loadingMc.x = 141;
            this.loadingMc.y = 268;
            //PanelManager.tipsLayer.addChild(this.loadingMc);           
            this.loadingMc.play(-1);
        }
        if (flag) {
        }
        else {
        }
    }
    PanelManager.showLoading = showLoading;
})(PanelManager || (PanelManager = {}));
