var StartPanelSkin8=(function (_super) {
	__extends(StartPanelSkin8, _super);
	function StartPanelSkin8() {
		_super.call(this);
		
		this.height = 1008;
		this.width = 640;
		this.elementsContent = [this.t1_i(),this._Image1_i(),this.t2_i(),this.lbl0_i(),this.lbl1_i(),this.lbl2_i(),this.lbl3_i(),this.lbl4_i(),this.txtTel_i(),this.txtYear_i(),this.txtSkill_i(),this.txtSchool_i(),this.txtName_i()];
	}
	var _proto = StartPanelSkin8.prototype;

	_proto.t1_i = function () {
		var t = new eui.Image();
		this.t1 = t;
		t.source = "bg_jpg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "p8_1";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.t2_i = function () {
		var t = new eui.Image();
		this.t2 = t;
		t.bottom = 36;
		t.horizontalCenter = 0;
		t.source = "p8_2";
		return t;
	};
	_proto.lbl0_i = function () {
		var t = new eui.Label();
		this.lbl0 = t;
		t.fontFamily = "微软雅黑";
		t.text = "姓名";
		t.textColor = 0xA4A4A4;
		t.x = 58;
		t.y = 264;
		return t;
	};
	_proto.lbl1_i = function () {
		var t = new eui.Label();
		this.lbl1 = t;
		t.fontFamily = "微软雅黑";
		t.text = "学校";
		t.textColor = 0xA4A4A4;
		t.x = 61;
		t.y = 732;
		return t;
	};
	_proto.lbl2_i = function () {
		var t = new eui.Label();
		this.lbl2 = t;
		t.fontFamily = "微软雅黑";
		t.text = "专业";
		t.textColor = 0xA4A4A4;
		t.x = 58;
		t.y = 497;
		return t;
	};
	_proto.lbl3_i = function () {
		var t = new eui.Label();
		this.lbl3 = t;
		t.fontFamily = "微软雅黑";
		t.text = "年级";
		t.textColor = 0xA4A4A4;
		t.x = 58;
		t.y = 617;
		return t;
	};
	_proto.lbl4_i = function () {
		var t = new eui.Label();
		this.lbl4 = t;
		t.fontFamily = "微软雅黑";
		t.text = "手机号码";
		t.textColor = 0xA4A4A4;
		t.x = 62;
		t.y = 384;
		return t;
	};
	_proto.txtTel_i = function () {
		var t = new eui.EditableText();
		this.txtTel = t;
		t.fontFamily = "微软雅黑";
		t.height = 44;
		t.text = "";
		t.textColor = 0x000000;
		t.width = 507;
		t.x = 58;
		t.y = 378;
		return t;
	};
	_proto.txtYear_i = function () {
		var t = new eui.EditableText();
		this.txtYear = t;
		t.fontFamily = "微软雅黑";
		t.height = 44;
		t.text = "";
		t.textColor = 0x000000;
		t.width = 507;
		t.x = 57;
		t.y = 616;
		return t;
	};
	_proto.txtSkill_i = function () {
		var t = new eui.EditableText();
		this.txtSkill = t;
		t.fontFamily = "微软雅黑";
		t.height = 44;
		t.text = "";
		t.textColor = 0x000000;
		t.width = 507;
		t.x = 57;
		t.y = 501;
		return t;
	};
	_proto.txtSchool_i = function () {
		var t = new eui.EditableText();
		this.txtSchool = t;
		t.fontFamily = "微软雅黑";
		t.height = 44;
		t.text = "";
		t.textColor = 0x000000;
		t.width = 507;
		t.x = 60;
		t.y = 729;
		return t;
	};
	_proto.txtName_i = function () {
		var t = new eui.EditableText();
		this.txtName = t;
		t.fontFamily = "微软雅黑";
		t.height = 43;
		t.text = "";
		t.textColor = 0x000000;
		t.width = 507;
		t.x = 57;
		t.y = 262;
		return t;
	};
	Object.defineProperty(_proto, "skinParts", {
		get: function () {
			return ["t1","t2","lbl0","lbl1","lbl2","lbl3","lbl4","txtTel","txtYear","txtSkill","txtSchool","txtName"];
		},
		enumerable: true,
		configurable: true
	});
	return StartPanelSkin8;
})(eui.Skin);