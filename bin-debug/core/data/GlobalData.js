/**
  * 全局数据存储
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  * 如果工程模块太大请分w文件或者分文件夹存储
  * 使用方法如：GlobalData.currentScore
  */
var GlobalData;
(function (GlobalData) {
    /*********************公共全局变量**********************/
    GlobalData.score = 0;
    GlobalData.jssdk;
    GlobalData.openid = "";
    GlobalData.isJiang = "";
    GlobalData.isMusic = true;
    GlobalData.isMusic2 = false;
})(GlobalData || (GlobalData = {}));
