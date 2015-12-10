var StartPanelSkin2=(function (_super) {
	__extends(StartPanelSkin2, _super);
	function StartPanelSkin2() {
		_super.call(this);
		
		this.height = 1008;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.t1_i(),this.t2_i(),this.t6_i(),this.t5_i(),this.t4_i(),this.t3_i(),this.t7_i(),this.t8_i(),this.t9_i(),this.t10_i()];
	}
	var _proto = StartPanelSkin2.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "bg_jpg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.t1_i = function () {
		var t = new eui.Image();
		this.t1 = t;
		t.source = "p2_2";
		t.visible = false;
		t.x = 81;
		t.y = 117;
		return t;
	};
	_proto.t2_i = function () {
		var t = new eui.Image();
		this.t2 = t;
		t.source = "p2_1";
		t.visible = false;
		t.x = 485;
		t.y = 84;
		return t;
	};
	_proto.t6_i = function () {
		var t = new eui.Image();
		this.t6 = t;
		t.horizontalCenter = 0;
		t.source = "p2_6";
		t.visible = false;
		t.y = 323;
		return t;
	};
	_proto.t5_i = function () {
		var t = new eui.Image();
		this.t5 = t;
		t.source = "p2_3";
		t.visible = false;
		t.x = 471;
		t.y = 213;
		return t;
	};
	_proto.t4_i = function () {
		var t = new eui.Image();
		this.t4 = t;
		t.source = "p2_4";
		t.visible = false;
		t.x = 275;
		t.y = 218;
		return t;
	};
	_proto.t3_i = function () {
		var t = new eui.Image();
		this.t3 = t;
		t.source = "p2_5";
		t.visible = false;
		t.x = 68;
		t.y = 216;
		return t;
	};
	_proto.t7_i = function () {
		var t = new eui.Image();
		this.t7 = t;
		t.source = "p2_7";
		t.visible = false;
		t.x = 189;
		t.y = 494;
		return t;
	};
	_proto.t8_i = function () {
		var t = new eui.Image();
		this.t8 = t;
		t.source = "p2_9";
		t.visible = false;
		t.x = 170;
		t.y = 462;
		return t;
	};
	_proto.t9_i = function () {
		var t = new eui.Image();
		this.t9 = t;
		t.source = "p2_10";
		t.visible = false;
		t.x = 166;
		t.y = 461;
		return t;
	};
	_proto.t10_i = function () {
		var t = new eui.Image();
		this.t10 = t;
		t.source = "p2_8";
		t.visible = false;
		t.x = 192;
		t.y = 514;
		return t;
	};
	Object.defineProperty(_proto, "skinParts", {
		get: function () {
			return ["t1","t2","t6","t5","t4","t3","t7","t8","t9","t10"];
		},
		enumerable: true,
		configurable: true
	});
	return StartPanelSkin2;
})(eui.Skin);