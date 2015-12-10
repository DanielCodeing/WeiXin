var NoJPanelSkin=(function (_super) {
	__extends(NoJPanelSkin, _super);
	function NoJPanelSkin() {
		_super.call(this);
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
	}
	var _proto = NoJPanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "telbg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "share1";
		t.x = 131;
		t.y = 20;
		return t;
	};
	Object.defineProperty(_proto, "skinParts", {
		get: function () {
			return [];
		},
		enumerable: true,
		configurable: true
	});
	return NoJPanelSkin;
})(eui.Skin);