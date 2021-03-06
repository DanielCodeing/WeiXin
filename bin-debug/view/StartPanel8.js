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
var StartPanel8 = (function (_super) {
    __extends(StartPanel8, _super);
    function StartPanel8() {
        _super.call(this);
        this.time = 0;
        this.xx = 0;
        this.yy = 0;
        this.isUp = false;
        this.isMove = false;
        this.vparm = "";
        //  指定当前类的皮肤名称
        this.skinName = "resource/skins/StartPanelSkin8.exml";
    }
    var d = __define,c=StartPanel8;p=c.prototype;
    /**
        所有子项和皮肤中的组件都已经创建完毕并完成测量，可以使用
      
        All the components in the children and skin have been
        created and measured, you can use them now.
    */
    p.childrenCreated = function () {
        this.isUp = false;
        this.isMove = false;
        //        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onTouchStart,this);
        //        this.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.onTouchMove,this);
        //        this.addEventListener(egret.TouchEvent.TOUCH_END,this.onTouchEnd,this);
        this.txtName.addEventListener(egret.Event.CHANGE, this.change, this);
        this.txtSchool.addEventListener(egret.Event.CHANGE, this.change, this);
        this.txtSkill.addEventListener(egret.Event.CHANGE, this.change, this);
        this.txtYear.addEventListener(egret.Event.CHANGE, this.change, this);
        this.txtTel.addEventListener(egret.Event.CHANGE, this.change, this);
        this.txtName.name = "lbl0";
        this.txtSchool.name = "lbl1";
        this.txtSkill.name = "lbl2";
        this.txtYear.name = "lbl3";
        this.txtTel.name = "lbl4";
        this.lbl0.name = "姓名";
        this.lbl1.name = "学校";
        this.lbl2.name = "专业";
        this.lbl3.name = "年级";
        this.lbl4.name = "电话号码";
        this.showt1();
        PanelManager.tipsLayer.removeChildren();
    };
    p.change = function (e) {
        var view = e.target;
        if (view.text.length > 0) {
            this[view.name].text = "";
        }
        else {
            this[view.name].text = this[view.name].name;
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
        if (Math.abs(nn) > 5) {
            this.isMove = true;
        }
        view.y = nn;
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
            }
            else {
                var ss = new StartPanel7();
                PanelManager.guiLayer.addChild(ss);
            }
            this.dispose();
        }
    };
    p.showt1 = function () {
        this.t2.y = 1008;
        egret.Tween.get(this.t2).to({ y: 894 }, 800).call(this.showt2.bind(this), this);
    };
    p.showt2 = function () {
        egret.Tween.get(this.t2).to({ alpha: 1 }, 800);
        this.t2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickt2, this);
    };
    p.clickt2 = function () {
        if (this.txtName.text == "" || this.txtTel.text == "") {
            alert("所填写信息不能为空!");
        }
        else {
            this.getInfo();
        }
    };
    p.getInfo = function () {
        //alert(obj.headimgurl)
        this.vparm = "http://139.129.24.10:82/fdt/user";
        Network.sendInfo("http://139.129.24.10:82/fdt/user", "openid=" + this.txtTel.text + "&name=" + this.txtName.text + "&school=" + this.txtSchool.text + "&major=" + this.txtSkill.text + "&tel=" + this.txtTel.text + "&grade=" + this.txtYear.text);
        lcp.LListener.getInstance().addEventListener(this.vparm, this.getInfoSucc, this);
    };
    p.getInfoSucc = function (e) {
        lcp.LListener.getInstance().removeEventListener(this.vparm, this.getInfoSucc, this);
        var obj = JSON.parse(e.param);
        this.t2.touchEnabled = false;
        alert("提交成功!");
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
    return StartPanel8;
})(eui.Component);
egret.registerClass(StartPanel8,"StartPanel8",["fany.IDispose"]);
