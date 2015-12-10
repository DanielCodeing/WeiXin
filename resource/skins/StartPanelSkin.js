var StartPanelSkin=(function (_super) {
	__extends(StartPanelSkin, _super);
	function StartPanelSkin() {
		_super.call(this);
		
		this.height = 1008;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.t1_i(),this.t2_i(),this.t3_i(),this.t4_i(),this.t5_i()];
	}
	var _proto = StartPanelSkin.prototype;

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
		t.source = "p1_1";
		t.y = 1008;
		return t;
	};
	_proto.t2_i = function () {
		var t = new eui.Image();
		this.t2 = t;
		t.alpha = 0;
		t.source = "p1_2";
		t.x = 437;
		t.y = 609;
		return t;
	};
	_proto.t3_i = function () {
		var t = new eui.Image();
		this.t3 = t;
		t.alpha = 0;
		t.source = "p1_5";
		t.x = 461;
		t.y = 121;
		return t;
	};
	_proto.t4_i = function () {
		var t = new eui.Image();
		this.t4 = t;
		t.horizontalCenter = 0;
		t.source = "p1_3";
		t.visible = false;
		t.y = 311;
		return t;
	};
	_proto.t5_i = function () {
		var t = new eui.Image();
		this.t5 = t;
		t.source = "p1_4";
		t.visible = false;
		t.x = 172;
		t.y = 330;
		return t;
	};
	Object.defineProperty(_proto, "skinParts", {
		get: function () {
			return ["t1","t2","t3","t4","t5"];
		},
		enumerable: true,
		configurable: true
	});
	return StartPanelSkin;
})(eui.Skin);