/**
 * 消息管理
 * by fany 2015 7.5
 * (c) copyright 2015 - 2035
 * All Rights Reserved.
 */
var NoticeManage = (function () {
    function NoticeManage() {
        if (NoticeManage.instance) {
            throw new Error("Instance is alreally exist");
        }
    }
    var d = __define,c=NoticeManage;p=c.prototype;
    NoticeManage.getInstance = function () {
        if (this.instance == null) {
            this.instance = new NoticeManage();
        }
        return this.instance;
    };
    p.send = function (notice, data, callBack) {
        PanelManager.showLoading(true);
        //        fany.SocketManage.pomelo.request(notice,data,function(data) {
        //                PanelManager.showLoading(false);
        //            callBack(data);
        //        });
    };
    NoticeManage.instance = null;
    return NoticeManage;
})();
egret.registerClass(NoticeManage,"NoticeManage");
