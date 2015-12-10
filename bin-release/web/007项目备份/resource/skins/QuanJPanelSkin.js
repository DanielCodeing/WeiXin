var QuanJPanelSkin=(function (_super) {
	__extends(QuanJPanelSkin, _super);
	function QuanJPanelSkin() {
		_super.call(this);
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.txtQuan_i(),this.txtMi_i(),this._Image2_i()];
	}
	var _proto = QuanJPanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "moviebg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.txtQuan_i = function () {
		var t = new eui.Label();
		this.txtQuan = t;
		t.fontFamily = "微软雅黑";
		t.height = 38;
		t.size = 30;
		t.width = 437;
		t.x = 98;
		t.y = 472;
		return t;
	};
	_proto.txtMi_i = function () {
		var t = new eui.Label();
		this.txtMi = t;
		t.fontFamily = "微软雅黑";
		t.height = 38;
		t.size = 30;
		t.width = 437;
		t.x = 97;
		t.y = 603;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "share1";
		t.x = 133;
		t.y = 18;
		return t;
	};
	Object.defineProperty(_proto, "skinParts", {
		get: function () {
			return ["txtQuan","txtMi"];
		},
		enumerable: true,
		configurable: true
	});
	return QuanJPanelSkin;
})(eui.Skin);