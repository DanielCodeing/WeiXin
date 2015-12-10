var StartPanelSkin5=(function (_super) {
	__extends(StartPanelSkin5, _super);
	function StartPanelSkin5() {
		_super.call(this);
		
		this.height = 1008;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.t3_i(),this.t4_i(),this.t2_i(),this.t1_i(),this.t5_i(),this.t6_i(),this.t7_i(),this.t8_i()];
	}
	var _proto = StartPanelSkin5.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "bg_jpg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.t3_i = function () {
		var t = new eui.Image();
		this.t3 = t;
		t.horizontalCenter = 0.5;
		t.source = "p5_1";
		t.visible = false;
		t.y = 191;
		return t;
	};
	_proto.t4_i = function () {
		var t = new eui.Image();
		this.t4 = t;
		t.horizontalCenter = 0;
		t.source = "p5_2";
		t.visible = false;
		t.y = 506;
		return t;
	};
	_proto.t2_i = function () {
		var t = new eui.Image();
		this.t2 = t;
		t.horizontalCenter = 0.5;
		t.source = "p5_3";
		t.visible = false;
		t.y = 117;
		return t;
	};
	_proto.t1_i = function () {
		var t = new eui.Image();
		this.t1 = t;
		t.horizontalCenter = 0;
		t.source = "p5_4";
		t.visible = false;
		t.y = 27;
		return t;
	};
	_proto.t5_i = function () {
		var t = new eui.Image();
		this.t5 = t;
		t.source = "g3_1";
		t.visible = false;
		t.x = 42;
		t.y = 506;
		return t;
	};
	_proto.t6_i = function () {
		var t = new eui.Image();
		this.t6 = t;
		t.source = "g3_2";
		t.visible = false;
		t.x = 42;
		t.y = 506;
		return t;
	};
	_proto.t7_i = function () {
		var t = new eui.Image();
		this.t7 = t;
		t.source = "g3_3";
		t.visible = false;
		t.x = 42;
		t.y = 506;
		return t;
	};
	_proto.t8_i = function () {
		var t = new eui.Image();
		this.t8 = t;
		t.source = "g3_4";
		t.visible = false;
		t.x = 30;
		t.y = 741;
		return t;
	};
	Object.defineProperty(_proto, "skinParts", {
		get: function () {
			return ["t3","t4","t2","t1","t5","t6","t7","t8"];
		},
		enumerable: true,
		configurable: true
	});
	return StartPanelSkin5;
})(eui.Skin);