var StartPanelSkin7=(function (_super) {
	__extends(StartPanelSkin7, _super);
	function StartPanelSkin7() {
		_super.call(this);
		
		this.height = 1008;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.t2_i(),this.t1_i(),this.t3_i(),this.t4_i()];
	}
	var _proto = StartPanelSkin7.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "bg_jpg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.t2_i = function () {
		var t = new eui.Image();
		this.t2 = t;
		t.horizontalCenter = 0;
		t.source = "p7_2";
		t.visible = false;
		t.y = 755;
		return t;
	};
	_proto.t1_i = function () {
		var t = new eui.Image();
		this.t1 = t;
		t.source = "g7_1";
		t.visible = false;
		t.x = 198;
		t.y = 95;
		return t;
	};
	_proto.t3_i = function () {
		var t = new eui.Image();
		this.t3 = t;
		t.horizontalCenter = 0.5;
		t.source = "g7_2";
		t.visible = false;
		t.y = 240;
		return t;
	};
	_proto.t4_i = function () {
		var t = new eui.Label();
		this.t4 = t;
		t.fontFamily = "微软雅黑";
		t.horizontalCenter = 0.5;
		t.size = 36;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x8C8C8C;
		t.visible = false;
		t.width = 473;
		t.y = 160;
		return t;
	};
	Object.defineProperty(_proto, "skinParts", {
		get: function () {
			return ["t2","t1","t3","t4"];
		},
		enumerable: true,
		configurable: true
	});
	return StartPanelSkin7;
})(eui.Skin);