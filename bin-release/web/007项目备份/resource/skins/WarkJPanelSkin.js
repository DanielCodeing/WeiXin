var WarkJPanelSkin=(function (_super) {
	__extends(WarkJPanelSkin, _super);
	function WarkJPanelSkin() {
		_super.call(this);
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.txtName_i(),this.txtAddress_i(),this.txtTel_i(),this.btnSubmit_i(),this.jiang_i()];
	}
	var _proto = WarkJPanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "submitbg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.txtName_i = function () {
		var t = new eui.EditableText();
		this.txtName = t;
		t.height = 36;
		t.width = 349;
		t.x = 188;
		t.y = 549;
		return t;
	};
	_proto.txtAddress_i = function () {
		var t = new eui.EditableText();
		this.txtAddress = t;
		t.height = 36;
		t.width = 349;
		t.x = 185;
		t.y = 682;
		return t;
	};
	_proto.txtTel_i = function () {
		var t = new eui.EditableText();
		this.txtTel = t;
		t.height = 43;
		t.width = 349;
		t.x = 186;
		t.y = 614;
		return t;
	};
	_proto.btnSubmit_i = function () {
		var t = new eui.Image();
		this.btnSubmit = t;
		t.horizontalCenter = 0;
		t.source = "btnSubmit";
		t.y = 850;
		return t;
	};
	_proto.jiang_i = function () {
		var t = new eui.Image();
		this.jiang = t;
		t.source = "mingpian";
		t.x = 91;
		t.y = 299;
		return t;
	};
	Object.defineProperty(_proto, "skinParts", {
		get: function () {
			return ["txtName","txtAddress","txtTel","btnSubmit","jiang"];
		},
		enumerable: true,
		configurable: true
	});
	return WarkJPanelSkin;
})(eui.Skin);