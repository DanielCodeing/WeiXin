var StartPanelSkin=(function (_super) {
	__extends(StartPanelSkin, _super);
	function StartPanelSkin() {
		_super.call(this);
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i()];
	}
	var _proto = StartPanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "start";
		t.x = 0;
		t.y = 0;
		return t;
	};
	Object.defineProperty(_proto, "skinParts", {
		get: function () {
			return [];
		},
		enumerable: true,
		configurable: true
	});
	return StartPanelSkin;
})(eui.Skin);