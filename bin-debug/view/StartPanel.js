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
var StartPanel = (function (_super) {
    __extends(StartPanel, _super);
    function StartPanel() {
        _super.call(this);
        this.time = 0;
        this.count = 0;
        this.count1 = 0;
        this.xx = 0;
        this.yy = 0;
        this.isUp = false;
        this.isMove = false;
        this.flag = false;
        //  指定当前类的皮肤名称
        this.skinName = "resource/skins/StartPanelSkin.exml";
    }
    var d = __define,c=StartPanel;p=c.prototype;
    /**
        所有子项和皮肤中的组件都已经创建完毕并完成测量，可以使用
      
        All the components in the children and skin have been
        created and measured, you can use them now.
    */
    p.childrenCreated = function () {
        this.isUp = false;
        this.isMove = false;
        this.flag = false;
        this.count = 0;
        this.count1 = 0;
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchStart, this);
        this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
        this.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
        this.addEventListener(egret.Event.ENTER_FRAME, this.gogo, this);
        this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onTouchEnd, this);
        this.t1.y = 1008;
        this.t1.alpha = 0;
        egret.Tween.get(this.t1).to({ y: 129, alpha: 1 }, 500).call(this.showZi12.bind(this));
    };
    p.gogo = function () {
        if (this.flag) {
            if (++this.count == 30) {
                EffectUtils.playEffect2(this.t2);
                this.count = 0;
            }
            if (++this.count1 == 20) {
                if (this.t4.visible) {
                    this.t4.visible = false;
                    this.t5.visible = true;
                }
                else {
                    this.t5.visible = false;
                    this.t4.visible = true;
                }
                this.count1 = 0;
            }
        }
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
        if (nn <= 0) {
            if (Math.abs(nn) < 252) {
                view.y = nn;
            }
        }
        if (Math.abs(nn) > 5) {
            this.isMove = true;
        }
        if (this.start2) {
            this.start2.y = nn;
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
                var s = new StartPanel2();
                PanelManager.guiLayer.addChild(s);
                this.dispose();
            }
        }
    };
    p.showZi12 = function () {
        this.flag = true;
        egret.Tween.get(this.t2).to({ alpha: 1 }, 800);
        egret.Tween.get(this.t3).to({ alpha: 1 }, 800);
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
        this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchStart, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
        this.removeChildren();
    };
    return StartPanel;
})(eui.Component);
egret.registerClass(StartPanel,"StartPanel",["fany.IDispose"]);
