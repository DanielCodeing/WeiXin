/**
 *
 * @author
 *
 */
var MoveManage = (function (_super) {
    __extends(MoveManage, _super);
    function MoveManage(arr) {
        _super.call(this);
        this.time = 0;
        this.xx = 0;
        this.yy = 0;
        this.data = arr;
        this.init();
    }
    var d = __define,c=MoveManage;p=c.prototype;
    p.init = function () {
        this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchStart, this);
        this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
        this.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
        for (var i = 0; i < this.data.length; i++) {
        }
        this.current = 0;
        this.addChild(this.data[0]);
        this.data[1].y = 1008;
        this.addChild(this.data[1]);
    };
    //点击事件的响应函数
    p.onTouchStart = function (e) {
        //this.time = egret.getTimer();
        var view = e.target.parent;
        this.xx = e.stageX - view.x;
        this.yy = e.stageY - view.y;
    };
    p.onTouchMove = function (e) {
        var view = e.target.parent;
        var nn = e.stageY - this.yy;
        console.log(nn);
        view.y = nn;
        if (view.y < 0) {
            if (this.current + 1 <= this.data.length) {
                this.data[this.current + 1].y -= Math.abs(nn);
            }
        }
        else {
            if (this.current - 1 >= 0) {
                this.data[this.current - 1].y += Math.abs(nn);
            }
        }
    };
    p.onTouchEnd = function (e) {
        //        var view = e.currentTarget;
        //        egret.Tween.get(view).to({ y: 0 },600,egret.Ease.elasticOut);
        //        var s = new ChatPanel();
        //        PanelManager.guiLayer.addChild(s);
    };
    return MoveManage;
})(eui.Group);
egret.registerClass(MoveManage,"MoveManage");
