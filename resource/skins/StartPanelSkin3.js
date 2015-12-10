var StartPanelSkin3=(function (_super) {
	__extends(StartPanelSkin3, _super);
	function StartPanelSkin3() {
		_super.call(this);
		
		this.height = 1008;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.t1_i(),this.t2_i(),this.p4_3_i(),this.p4_1_i(),this.p4_2_i(),this.p3_3_i(),this.p3_1_i(),this.p3_2_i(),this.p1_3_i(),this.p1_1_i(),this.p1_2_i(),this.p2_3_i(),this.p2_1_i(),this.p2_2_i(),this.p1_i()];
	}
	var _proto = StartPanelSkin3.prototype;

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
		t.horizontalCenter = 0;
		t.source = "p3_2";
		t.visible = false;
		t.y = 597;
		return t;
	};
	_proto.t2_i = function () {
		var t = new eui.Image();
		this.t2 = t;
		t.horizontalCenter = 0;
		t.source = "p3_3";
		t.visible = false;
		t.y = 834;
		return t;
	};
	_proto.p4_3_i = function () {
		var t = new eui.Image();
		this.p4_3 = t;
		t.source = "g3_1_1";
		t.visible = false;
		t.x = 329;
		t.y = 387;
		return t;
	};
	_proto.p4_1_i = function () {
		var t = new eui.Image();
		this.p4_1 = t;
		t.source = "g3_1_2";
		t.visible = false;
		t.x = 326;
		t.y = 622;
		return t;
	};
	_proto.p4_2_i = function () {
		var t = new eui.Image();
		this.p4_2 = t;
		t.source = "g3_1_3";
		t.visible = false;
		t.x = 551;
		t.y = 541;
		return t;
	};
	_proto.p3_3_i = function () {
		var t = new eui.Image();
		this.p3_3 = t;
		t.source = "g3_2_1";
		t.visible = false;
		t.x = 125;
		t.y = 390;
		return t;
	};
	_proto.p3_1_i = function () {
		var t = new eui.Image();
		this.p3_1 = t;
		t.source = "g3_2_2";
		t.visible = false;
		t.x = 126;
		t.y = 566;
		return t;
	};
	_proto.p3_2_i = function () {
		var t = new eui.Image();
		this.p3_2 = t;
		t.source = "g3_2_3";
		t.visible = false;
		t.x = 96;
		t.y = 481;
		return t;
	};
	_proto.p1_3_i = function () {
		var t = new eui.Image();
		this.p1_3 = t;
		t.source = "g3_3_1";
		t.visible = false;
		t.x = 102;
		t.y = 86;
		return t;
	};
	_proto.p1_1_i = function () {
		var t = new eui.Image();
		this.p1_1 = t;
		t.source = "g3_3_2";
		t.visible = false;
		t.x = 104;
		t.y = 42;
		return t;
	};
	_proto.p1_2_i = function () {
		var t = new eui.Image();
		this.p1_2 = t;
		t.source = "g3_3_3";
		t.visible = false;
		t.x = 66;
		t.y = 81;
		return t;
	};
	_proto.p2_3_i = function () {
		var t = new eui.Image();
		this.p2_3 = t;
		t.source = "g3_4_1";
		t.visible = false;
		t.x = 358;
		t.y = 131;
		return t;
	};
	_proto.p2_1_i = function () {
		var t = new eui.Image();
		this.p2_1 = t;
		t.source = "g3_4_2";
		t.visible = false;
		t.x = 360;
		t.y = 95;
		return t;
	};
	_proto.p2_2_i = function () {
		var t = new eui.Image();
		this.p2_2 = t;
		t.rotation = 180;
		t.source = "g3_4_3";
		t.visible = false;
		t.x = 364;
		t.y = 171;
		return t;
	};
	_proto.p1_i = function () {
		var t = new eui.Image();
		this.p1 = t;
		t.source = "assets2_json.g33";
		t.visible = false;
		t.x = 179;
		t.y = 305;
		return t;
	};
	Object.defineProperty(_proto, "skinParts", {
		get: function () {
			return ["t1","t2","p4_3","p4_1","p4_2","p3_3","p3_1","p3_2","p1_3","p1_1","p1_2","p2_3","p2_1","p2_2","p1"];
		},
		enumerable: true,
		configurable: true
	});
	return StartPanelSkin3;
})(eui.Skin);