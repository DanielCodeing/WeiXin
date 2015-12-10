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
class StartPanel7 extends eui.Component implements fany.IDispose
{

    public constructor()
    {
        super();
        //  指定当前类的皮肤名称
        this.skinName = "resource/skins/StartPanelSkin7.exml";
    }
    private t1: eui.Image;
    private t2: eui.Image;
    private t3: eui.Image;
    private t4: eui.Label;
    
    private time: number = 0;
    private xx: number = 0;
    private yy: number = 0;
    
    private isUp: boolean = false;
    private isMove: boolean = false;
    /**  
        所有子项和皮肤中的组件都已经创建完毕并完成测量，可以使用
      
        All the components in the children and skin have been 
        created and measured, you can use them now.
    */
    public childrenCreated(){   
        this.isUp = false;
        this.isMove = false;
        
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onTouchStart,this);
        this.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.onTouchMove,this);
        this.addEventListener(egret.TouchEvent.TOUCH_END,this.onTouchEnd,this);
        this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE,this.onTouchEnd,this);
        
        this.showt1();
    }
    //点击事件的响应函数
    public onTouchStart(e: egret.TouchEvent): void {
        this.time = egret.getTimer();
        var view = e.currentTarget;
        this.xx = e.stageX - view.x;
        this.yy = e.stageY - view.y;
    }

    public onTouchMove(e: egret.TouchEvent): void {
        var view = e.currentTarget;
        var nn = e.stageY - this.yy;
        if(Math.abs(nn) > 5) {
            this.isMove = true;
        }
        if(nn <= 0) {
            if(Math.abs(nn) < 252) {
                view.y = nn;
            }
        }
        if(view.y < 0) {
            this.isUp = false;
        }
        else {
            this.isUp = true;
        }
    }

    public onTouchEnd(e: egret.TouchEvent): void {
        var view = e.currentTarget;
        //var nowTime = egret.getTimer();
        if(this.isMove) {
            egret.Tween.get(view).to({ y: 0 },600,egret.Ease.elasticOut);
            if(!this.isUp) {
                this.dispose();
                var s = new StartPanel8();
                PanelManager.guiLayer.addChild(s);
            } else {
//                var ss = new StartPanel6();
//                PanelManager.guiLayer.addChild(ss);
            }

        }
    }
    private showt1(): void
    {
        this.t1.visible = true;
        //egret.Tween.get(this.t1).to({ alpha: 1 },800).call(this.showt2.bind(this),this);
        EffectUtils.playEffect3(this.t1,600,this.showt2.bind(this));
    }
    private showt2(): void {
//        egret.Tween.get(this.t2).to({ alpha: 1 },800);
//        this.t2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.clickt2,this);
        this.t4.visible = true;
        EffectUtils.typerEffect(this.t4,"浙江大学紫金港校区西二105");
        egret.setTimeout(this.showt3.bind(this),this,2800);
    }
    private showt3(): void {
        this.t3.visible = true;
        //egret.Tween.get(this.t1).to({ alpha: 1 },800).call(this.showt2.bind(this),this);
        EffectUtils.playEffect4(this.t3,this.showt4.bind(this));
    }
    private showt4(): void {
        this.t2.visible = true;
        this.t2.y = 1008;
        egret.Tween.get(this.t2).to({ y: 755,alpha:1 },1000);
        this.t2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.clickt2,this);
    }
    private clickt2(): void {
        this.dispose();
        var s = new StartPanel8();
        PanelManager.guiLayer.addChild(s);
    }

    /**
        partAdded 是皮肤部件赋值到逻辑类的入口，你可以在这里进行
        必要的初始化操作。比如需要随屏幕改变组件的尺寸，写在这里
        可以避免写在 childrenCreated 中修改造成的多次测量。
        d
      
        The method "partAdded" will be called just after the
        skin parts is assigned to the property. You can make 
        changes will effect to the layout or other components.
    */
    public partAdded(partName:string,instance:any):void {
        super.partAdded(partName,instance);
    }
   
    public dispose(): void
    {
        this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onTouchStart,this);
        this.removeEventListener(egret.TouchEvent.TOUCH_MOVE,this.onTouchMove,this);
        this.removeEventListener(egret.TouchEvent.TOUCH_END,this.onTouchEnd,this);
        this.removeChildren();
    }
}