var OverPanelSkin=(function (_super) {
	__extends(OverPanelSkin, _super);
	function OverPanelSkin() {
		_super.call(this);
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this.shibai_i(),this.shengli_i()];
	}
	var _proto = OverPanelSkin.prototype;

	_proto.shibai_i = function () {
		var t = new eui.Group();
		this.shibai = t;
		t.visible = false;
		t.elementsContent = [this._Image1_i(),this.n1_i(),this.n2_i(),this.btnAgain_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "shibai";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.n1_i = function () {
		var t = new eui.Image();
		this.n1 = t;
		t.source = "n2";
		t.x = 151;
		t.y = 389;
		return t;
	};
	_proto.n2_i = function () {
		var t = new eui.Image();
		this.n2 = t;
		t.source = "n9";
		t.x = 289;
		t.y = 389;
		return t;
	};
	_proto.btnAgain_i = function () {
		var t = new eui.Image();
		this.btnAgain = t;
		t.horizontalCenter = 0.5;
		t.source = "btnAgain";
		t.y = 577;
		return t;
	};
	_proto.shengli_i = function () {
		var t = new eui.Group();
		this.shengli = t;
		t.visible = false;
		t.elementsContent = [this._Image2_i(),this.n3_i(),this.n4_i(),this.btnJiang_i(),this.btnAgain1_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "shengli";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.n3_i = function () {
		var t = new eui.Image();
		this.n3 = t;
		t.source = "n2";
		t.x = 151;
		t.y = 375;
		return t;
	};
	_proto.n4_i = function () {
		var t = new eui.Image();
		this.n4 = t;
		t.source = "n9";
		t.x = 289;
		t.y = 375;
		return t;
	};
	_proto.btnJiang_i = function () {
		var t = new eui.Image();
		this.btnJiang = t;
		t.horizontalCenter = 0;
		t.source = "btnJiang";
		t.y = 797;
		return t;
	};
	_proto.btnAgain1_i = function () {
		var t = new eui.Image();
		this.btnAgain1 = t;
		t.horizontalCenter = 0;
		t.source = "btnAgain";
		t.y = 624;
		return t;
	};
	Object.defineProperty(_proto, "skinParts", {
		get: function () {
			return ["n1","n2","btnAgain","shibai","n3","n4","btnJiang","btnAgain1","shengli"];
		},
		enumerable: true,
		configurable: true
	});
	return OverPanelSkin;
})(eui.Skin);