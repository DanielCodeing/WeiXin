  /**
    * 面板管理类
    * by dily
    * (c) copyright false,0,0,2014 - 2035
    * All Rights Reserved. 
    * 面板的管理类
    */
module PanelManager {

    export var loadingMc: egret.MovieClip;
    export var gameLayer: egret.DisplayObjectContainer;
    export var tipsLayer: egret.DisplayObjectContainer;
    export var guiLayer: eui.UILayer;
    export var sound: egret.Sound;
    export var channel: egret.SoundChannel;
    export var sound1: egret.Sound;
    export var channel1: egret.SoundChannel;
    
    export var start: eui.Component;
    export var start2: eui.Component;
    export var start3: eui.Component;
    //export var game: GamePanel;
    // 初始化所有面板
    export function initMusic(): void {
        this.sound = RES.getRes("bg_mp3");
//        this.sound = RES.getRes("message_mp3");
//        this.sound1 = RES.getRes("phone_mp3");
        //PanelManager.channel = PanelManager.sound.play(0,-1);
    }
    export function playMessageMuisc(v): void {
        this.closeMessageMuisc();
        this.channel = this.sound.play(0,-1);
        this.channel.volume = v;
    }
    export function closeMessageMuisc(): void {
        if(this.channel) {
            this.channel.stop();
            this.channel = null;
        }
    }
    export function playPhoneMuisc(v): void {
        this.closePhoneMuisc();
        this.channel1 = this.sound1.play(0,1);
        this.channel1.volume = v;
    }
    export function closePhoneMuisc(): void {
        if(this.channel1) {
            this.channel1.stop();
            this.channel1 = null;
        }
    }
    
    export function openGamePanel(): void {
//        if(this.game) {
//            this.game = null;
//        }
//        this.game = new GamePanel();
//        PanelManager.guiLayer.addChild(this.game);
    }

    export function openPanel(data): void {
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
    export var vparm: string = "";
    export function getInfo(): void {
        //alert(obj.headimgurl)
        this.vparm = "http://139.129.24.10:82/jm/user";
        Network.sendInfo("http://139.129.24.10:82/jm/user","openid=" + GlobalData.openid+"&shared=1");
        lcp.LListener.getInstance().addEventListener(this.vparm,this.getInfoSucc,this);
    }
    export function getInfoSucc(e): void {
        lcp.LListener.getInstance().removeEventListener(this.vparm,this.getInfoSucc,this);
        var obj = JSON.parse(e.param);
        //alert(e.param);
    }
    export function initGame(data): void {
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
    export function showLoading(flag: boolean): void {
        if(!this.loadingMc) {
            var data = RES.getRes("loading_json");
            var txtr = RES.getRes("loading_png");

            var mcFactory: egret.MovieClipDataFactory = new egret.MovieClipDataFactory(data,txtr);
            this.loadingMc = new egret.MovieClip(mcFactory.generateMovieClipData("loading"));
            this.loadingMc.x = 141;
            this.loadingMc.y = 268;
            //PanelManager.tipsLayer.addChild(this.loadingMc);           
            this.loadingMc.play(-1);
        }
        if(flag) {
            //egret.gui.PopUpManager.addPopUp(this.loadingMc,true,true);
        }
        else {
            // egret.gui.PopUpManager.removePopUp(this.loadingMc);
        }
    }
}


