//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-2015, Egret Technology Inc.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var LoadingUI = (function (_super) {
    __extends(LoadingUI, _super);
    function LoadingUI() {
        _super.call(this);
        this.createView();
    }
    var d = __define,c=LoadingUI;p=c.prototype;
    p.createView = function () {
        //        this.bg = new egret.Bitmap();
        //        this.bg.texture = RES.getRes("bg1_jpg");
        //        this.addChild(this.bg);
        //this.playB();
        this.textField = new egret.TextField();
        this.addChild(this.textField);
        this.textField.width = 640;
        this.textField.textColor = 0x765c43;
        this.textField.textAlign = "center";
        this.textField.size = 30;
        this.textField.y = 450;
    };
    p.playB = function () {
        var data = RES.getRes("mc_json");
        var txtr = RES.getRes("mc_png");
        var mcFactory = new egret.MovieClipDataFactory(data, txtr);
        this.mc = new egret.MovieClip(mcFactory.generateMovieClipData("tt"));
        this.addChild(this.mc);
        this.mc.x = 69;
        this.mc.y = 265;
    };
    p.setProgress = function (current, total) {
        this.textField.text = "正在加载..." + parseInt((current / total) * 100 + "") + "%";
        //console.log(this.textField.text);
        //this.mc.gotoAndStop(parseInt((current * 20 / total)+""));
        //this.mc.play(-1);
    };
    return LoadingUI;
})(egret.Sprite);
egret.registerClass(LoadingUI,"LoadingUI");
