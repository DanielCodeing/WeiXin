var StartPanelSkin6=(function (_super) {
	__extends(StartPanelSkin6, _super);
	function StartPanelSkin6() {
		_super.call(this);
		
		this.height = 1008;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.t1_i(),this.t2_i(),this.t3_i(),this.t4_i(),this.t5_i()];
	}
	var _proto = StartPanelSkin6.prototype;

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
		t.horizontalCenter = 0.5;
		t.source = "p6_2";
		t.visible = false;
		t.y = 97;
		return t;
	};
	_proto.t2_i = function () {
		var t = new eui.Image();
		this.t2 = t;
		t.alpha = 0;
		t.source = "g6_1";
		t.x = 81;
		t.y = 551;
		return t;
	};
	_proto.t3_i = function () {
		var t = new eui.Image();
		this.t3 = t;
		t.alpha = 0;
		t.source = "g6_2";
		t.x = 82;
		t.y = 612;
		return t;
	};
	_proto.t4_i = function () {
		var t = new eui.Image();
		this.t4 = t;
		t.alpha = 0;
		t.source = "g6_3";
		t.x = 81;
		t.y = 675;
		return t;
	};
	_proto.t5_i = function () {
		var t = new eui.Image();
		this.t5 = t;
		t.alpha = 0;
		t.source = "g6_4";
		t.x = 81;
		t.y = 736;
		return t;
	};
	Object.defineProperty(_proto, "skinParts", {
		get: function () {
			return ["t1","t2","t3","t4","t5"];
		},
		enumerable: true,
		configurable: true
	});
	return StartPanelSkin6;
})(eui.Skin);