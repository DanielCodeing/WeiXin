/*
 * Copyright (c) 2014,Egret-Labs.org
 * All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of the Egret-Labs.org nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
/**
 * 开始页面显示logo,同时连接服务器
 *
 */
var StartPanel5 = (function (_super) {
    __extends(StartPanel5, _super);
    function StartPanel5() {
        _super.call(this);
        this.time = 0;
        this.xx = 0;
        this.yy = 0;
        this.isUp = false;
        this.isMove = false;
        //  指定当前类的皮肤名称
        this.skinName = "resource/skins/StartPanelSkin5.exml";
    }
    var d = __define,c=StartPanel5;p=c.prototype;
    /**
        所有子项和皮肤中的组件都已经创建完毕并完成测量，可以使用
      
        All the components in the children and skin have been
        created and measured, you can use them now.
    */
    p.childrenCreated = function () {
        this.isUp = false;
        this.isMove = false;
        this.t1.visible = true;
        EffectUtils.playEffect3(this.t1, 600, this.showt.bind(this));
        //this.addEventListener(egret.Event.ENTER_FRAME,this.gogo,this);
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchStart, this);
        this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
        this.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
        this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onTouchEnd, this);
    };
    p.showt = function () {
        this.t1.alpha = 0;
        egret.Tween.get(this.t1).to({ alpha: 1 }, 400).call(this.showtt.bind(this), this);
    };
    p.showtt = function () {
        setTimeout(this.showt2.bind(this), 200);
    };
    //    private showttt(): void {
    //        this.t1.alpha = 0;
    //        egret.Tween.get(this.t1).to({ alpha: 1 },800).call(this.showt2.bind(this),this);
    //    }
    p.gogo = function () {
    };
    //点击事件的响应函数
    p.onTouchStart = function (e) {
        this.time = egret.getTimer();
        var view = e.currentTarget;
        this.xx = e.stageX - view.x;
        this.yy = e.stageY - view.y;
    };
    p.onTouchMove = function (e) {
        var view = e.currentTarget;
        var nn = e.stageY - this.yy;
        if (Math.abs(nn) > 5) {
            this.isMove = true;
        }
        if (nn <= 0) {
            if (Math.abs(nn) < 252) {
                view.y = nn;
            }
        }
        if (view.y < 0) {
            this.isUp = false;
        }
        else {
            this.isUp = true;
        }
    };
    p.onTouchEnd = function (e) {
        var view = e.currentTarget;
        //var nowTime = egret.getTimer();
        if (this.isMove) {
            egret.Tween.get(view).to({ y: 0 }, 600, egret.Ease.elasticOut);
            if (!this.isUp) {
                this.dispose();
                var s = new StartPanel6();
                PanelManager.guiLayer.addChild(s);
            }
            else {
            }
        }
    };
    p.showt2 = function () {
        this.t2.visible = true;
        EffectUtils.playEffect3(this.t2, 600, this.showt3.bind(this));
    };
    p.showt3 = function () {
        this.t3.visible = true;
        EffectUtils.playEffect3(this.t3, 600, this.showt5.bind(this));
    };
    p.showt4 = function () {
        this.t4.visible = true;
        this.t4.alpha = 0;
        egret.Tween.get(this.t4).to({ alpha: 1 }, 800).call(this.showt5.bind(this), this);
    };
    p.showt5 = function () {
        this.t5.visible = true;
        this.t5.alpha = 0;
        egret.Tween.get(this.t5).to({ alpha: 1 }, 800).call(this.showt6.bind(this), this);
    };
    p.showt6 = function () {
        this.t6.visible = true;
        this.t6.alpha = 0;
        egret.Tween.get(this.t6).to({ alpha: 1 }, 800).call(this.showt7.bind(this), this);
    };
    p.showt7 = function () {
        this.t7.visible = true;
        this.t7.alpha = 0;
        egret.Tween.get(this.t7).to({ alpha: 1 }, 800).call(this.showt8.bind(this), this);
    };
    p.showt8 = function () {
        this.t8.visible = true;
        this.t8.alpha = 0;
        egret.Tween.get(this.t8).to({ alpha: 1 }, 800);
    };
    /**
        partAdded 是皮肤部件赋值到逻辑类的入口，你可以在这里进行
        必要的初始化操作。比如需要随屏幕改变组件的尺寸，写在这里
        可以避免写在 childrenCreated 中修改造成的多次测量。
        d
      
        The method "partAdded" will be called just after the
        skin parts is assigned to the property. You can make
        changes will effect to the layout or other components.
    */
    p.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    p.dispose = function () {
        this.removeEventListener(egret.Event.ENTER_FRAME, this.gogo, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchStart, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
        this.removeChildren();
    };
    return StartPanel5;
})(eui.Component);
egret.registerClass(StartPanel5,"StartPanel5",["fany.IDispose"]);
