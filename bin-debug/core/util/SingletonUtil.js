/**
 * Created by d8q8 on 2014/11/28.
 * @module lcp
 * @class SingletonUtil
 * @constructor
 **/
var lcp;
(function (lcp) {
    /**
     * 单例工具类
     */
    var SingletonUtil = (function () {
        function SingletonUtil() {
            this.CLASS_NAME = "SingletonUtil";
        }
        var d = __define,c=SingletonUtil;p=c.prototype;
        /**
         * 创建单例类,无需调整或扩展本身
         * @param type
         * @returns {any}
         */
        SingletonUtil.singleton = function (type) {
            if (this._singletonMap == null)
                this._singletonMap = {};
            return type in this._singletonMap ? this._singletonMap[type] : this._singletonMap[type] = new type();
        };
        /**
         * 创建多例类,无需调整或扩展本身
         * @param type
         * @param id
         * @returns {any}
         */
        SingletonUtil.multiton = function (type, id) {
            if (this._multitonMap == null)
                this._multitonMap = {};
            if (!(type in this._multitonMap))
                this._multitonMap[type] = {};
            if (!(id in this._multitonMap[type]))
                this._multitonMap[type][id] = new type();
            return this._multitonMap[type][id];
        };
        /**
         * 类名
         * @returns {string}
         */
        p.toString = function () {
            //console.log("ClassName",this.CLASS_NAME);
            return this.CLASS_NAME;
        };
        return SingletonUtil;
    })();
    lcp.SingletonUtil = SingletonUtil;
    egret.registerClass(SingletonUtil,"lcp.SingletonUtil");
})(lcp || (lcp = {}));
