"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Elements = void 0;
var isLengthTruthy = function (array) { return array.length > 0; };
var checkLengthTruthy = function (array) {
    if (!isLengthTruthy(array))
        throw new Error("The Length of the array is zero");
};
var Elements = (function (_super) {
    __extends(Elements, _super);
    function Elements(maybeArray) {
        var _this = _super.apply(this, __spread(Array.from(maybeArray))) || this;
        Object.setPrototypeOf(_this, Elements.prototype);
        return _this;
    }
    Elements.prototype.asSingle = function () {
        checkLengthTruthy(this);
        if (this.length > 1)
            throw new Error("Search result is more than number which you think");
        return this[0];
    };
    return Elements;
}(Array));
exports.Elements = Elements;
