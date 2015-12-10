var GamePanelSkin=(function (_super) {
	__extends(GamePanelSkin, _super);
	function GamePanelSkin() {
		_super.call(this);
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this.gamebg_i(),this.btnGo_i(),this.quan1_i(),this._Image1_i(),this.c360_i(),this.btnStop_i(),this.guize_i(),this.txtTime_i()];
	}
	var _proto = GamePanelSkin.prototype;

	_proto.gamebg_i = function () {
		var t = new eui.Image();
		this.gamebg = t;
		t.source = "gamebg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btnGo_i = function () {
		var t = new eui.Image();
		this.btnGo = t;
		t.source = "btnGo";
		t.x = 442;
		t.y = 844;
		return t;
	};
	_proto.quan1_i = function () {
		var t = new eui.Image();
		this.quan1 = t;
		t.source = "quan_png";
		t.x = 0;
		t.y = -96;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "mask";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.c360_i = function () {
		var t = new eui.Image();
		this.c360 = t;
		t.horizontalCenter = -8;
		t.source = "c360";
		t.verticalCenter = -14.5;
		return t;
	};
	_proto.btnStop_i = function () {
		var t = new eui.Image();
		this.btnStop = t;
		t.horizontalCenter = 0;
		t.source = "btnStop";
		t.y = 843;
		return t;
	};
	_proto.guize_i = function () {
		var t = new eui.Image();
		this.guize = t;
		t.source = "guize";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.txtTime_i = function () {
		var t = new eui.Label();
		this.txtTime = t;
		t.height = 35;
		t.text = "Time:10S";
		t.textAlign = "center";
		t.textColor = 0xC9B7A3;
		t.width = 165;
		t.x = 456;
		t.y = 24;
		return t;
	};
	Object.defineProperty(_proto, "skinParts", {
		get: function () {
			return ["gamebg","btnGo","quan1","c360","btnStop","guize","txtTime"];
		},
		enumerable: true,
		configurable: true
	});
	return GamePanelSkin;
})(eui.Skin);