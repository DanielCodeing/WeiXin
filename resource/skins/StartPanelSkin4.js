var StartPanelSkin4=(function (_super) {
	__extends(StartPanelSkin4, _super);
	function StartPanelSkin4() {
		_super.call(this);
		
		this.height = 1008;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.t1_i(),this.t2_i(),this.t4_i(),this.t3_i()];
	}
	var _proto = StartPanelSkin4.prototype;

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
		t.source = "p4_1";
		t.y = 126;
		return t;
	};
	_proto.t2_i = function () {
		var t = new eui.Image();
		this.t2 = t;
		t.horizontalCenter = 0;
		t.source = "p4_2";
		t.y = 213;
		return t;
	};
	_proto.t4_i = function () {
		var t = new eui.Image();
		this.t4 = t;
		t.source = "p4_3";
		t.x = 296;
		t.y = 565;
		return t;
	};
	_proto.t3_i = function () {
		var t = new eui.Image();
		this.t3 = t;
		t.source = "p4_4";
		t.x = 104;
		t.y = 660;
		return t;
	};
	Object.defineProperty(_proto, "skinParts", {
		get: function () {
			return ["t1","t2","t4","t3"];
		},
		enumerable: true,
		configurable: true
	});
	return StartPanelSkin4;
})(eui.Skin);