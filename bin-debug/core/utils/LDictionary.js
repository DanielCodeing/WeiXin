/**
 * Created by d8q8 on 2014/11/18.
 * @module lcp
 * @class LDictionary
 * @constructor
 **/
var lcp;
(function (lcp) {
    /**
     * 字典类
     */
    var LDictionary = (function () {
        function LDictionary(elements) {
            if (elements === void 0) { elements = {}; }
            this.elements = elements;
            this.CLASS_NAME = "LDictionary";
            this.hasSpecialProto = false; // 是否有 "__proto__" key值?
            this.specialProto = undefined; // "__proto__" key是否存在
            // 初始化
        }
        var d = __define,c=LDictionary;p=c.prototype;
        /**
         * 判断是否有key
         * @param key
         * @returns {boolean}
         */
        p.has = function (key) {
            if (key === "__proto__") {
                return this.hasSpecialProto;
            }
            // 自己的属性
            return {}.hasOwnProperty.call(this.elements, key);
        };
        /**
         * 获取值key的值
         * @param key
         * @returns {*}
         */
        p.get = function (key) {
            if (key === "__proto__") {
                return this.specialProto;
            }
            // 仅仅自己的属性
            return this.has(key) ? this.elements[key] : undefined;
        };
        /**
         * 设置初始值
         * @param key
         * @param val
         */
        p.set = function (key, val) {
            if (key === "__proto__") {
                this.hasSpecialProto = true;
                this.specialProto = val;
            }
            else {
                this.elements[key] = val;
            }
        };
        /**
         * 删除key
         * @param key
         */
        p.remove = function (key) {
            if (key === "__proto__") {
                this.hasSpecialProto = false;
                this.specialProto = undefined;
            }
            else {
                delete this.elements[key];
            }
        };
        /**
         * 类名
         * @returns {string}
         */
        p.toString = function () {
            //console.log("ClassName",this.CLASS_NAME);
            return this.CLASS_NAME;
        };
        return LDictionary;
    })();
    lcp.LDictionary = LDictionary;
    egret.registerClass(LDictionary,"lcp.LDictionary");
})(lcp || (lcp = {}));
