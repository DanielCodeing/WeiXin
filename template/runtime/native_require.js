
var game_file_list = [
    //以下为自动修改，请勿修改
    //----auto game_file_list start----
	"libs/modules/egret/egret.js",
	"libs/modules/egret/egret.native.js",
	"libs/modules/eui/eui.js",
	"libs/modules/res/res.js",
	"libs/modules/game/game.js",
	"libs/modules/game/game.native.js",
	"libs/modules/socket/socket.js",
	"libs/modules/tween/tween.js",
	"libs/weixin/weixin.min.js",
	"libs/weixin/jweixin-1.0.0.js",
	"bin-debug/core/component/ScrollText.js",
	"bin-debug/core/config/GameConfig.js",
	"bin-debug/core/data/GlobalData.js",
	"bin-debug/core/data/PropertiesAnalyzer.js",
	"bin-debug/core/interfaces/IDispose.js",
	"bin-debug/core/utils/Dictionary.js",
	"bin-debug/core/manage/EventManage.js",
	"bin-debug/core/manage/NoticeManage.js",
	"bin-debug/core/manage/PanelManager.js",
	"bin-debug/core/model/UserInfo.js",
	"bin-debug/core/net/Network.js",
	"bin-debug/core/net/SocketManager.js",
	"bin-debug/core/notification/MainNotify.js",
	"bin-debug/core/notification/NoticeNotify.js",
	"bin-debug/core/util/SingletonUtil.js",
	"bin-debug/core/util/UserInfoUtil.js",
	"bin-debug/core/utils/EffectUtils.js",
	"bin-debug/core/utils/Global.js",
	"bin-debug/core/utils/LDictionary.js",
	"bin-debug/core/utils/md5.js",
	"bin-debug/core/utils/NativeApi.js",
	"bin-debug/core/utils/RegUtils.js",
	"bin-debug/core/utils/UtilsClass/BitmapBlink.js",
	"bin-debug/core/utils/UtilsClass/LEvent.js",
	"bin-debug/core/utils/UtilsClass/LListener.js",
	"bin-debug/core/utils/UtilsClass/TipsUtils.js",
	"bin-debug/JSSDK.js",
	"bin-debug/Main.js",
	"bin-debug/other/AssetAdapter.js",
	"bin-debug/other/LoadingUI.js",
	"bin-debug/other/ThemeAdapter.js",
	"bin-debug/view/MoveManage.js",
	"bin-debug/view/StartPanel.js",
	"bin-debug/view/StartPanel2.js",
	"bin-debug/view/StartPanel3.js",
	"bin-debug/view/StartPanel4.js",
	"bin-debug/view/StartPanel5.js",
	"bin-debug/view/StartPanel6.js",
	"bin-debug/view/StartPanel7.js",
	"bin-debug/view/StartPanel8.js",
	//----auto game_file_list end----
];

var window = {};

egret_native.setSearchPaths([""]);

egret_native.requireFiles = function () {
    for (var key in game_file_list) {
        var src = game_file_list[key];
        require(src);
    }
};

egret_native.egretInit = function () {
    egret_native.requireFiles();
    egret.TextField.default_fontFamily = "/system/fonts/DroidSansFallback.ttf";
    //egret.dom为空实现
    egret.dom = {};
    egret.dom.drawAsCanvas = function () {
    };
};

egret_native.egretStart = function () {
    var option = {
        //以下为自动修改，请勿修改
        //----auto option start----
		entryClassName: "Main",
		frameRate: 30,
		scaleMode: "exactFit",
		contentWidth: 640,
		contentHeight: 1008,
		showPaintRect: false,
		showFPS: false,
		fpsStyles: "x:0,y:0,size:30,textColor:0x00c200,bgAlpha:0.9",
		showLog: false,
		logFilter: "",
		maxTouches: 2,
		textureScaleFactor: 1
		//----auto option end----
    };

    egret.native.NativePlayer.option = option;
    egret.runEgret();
    egret_native.Label.createLabel(egret.TextField.default_fontFamily, 20, "", 0);
    egret_native.EGTView.preSetOffScreenBufferEnable(true);
};