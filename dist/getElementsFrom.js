"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getElementsFrom = void 0;
var Elements_1 = require("./Elements");
var ElementSearcher = (function () {
    function ElementSearcher(container) {
        this.container = container;
    }
    ElementSearcher.prototype.byTagName = function (tagName) {
        var els = this.container.getElementsByTagName(tagName);
        return new Elements_1.Elements(els);
    };
    return ElementSearcher;
}());
exports.getElementsFrom = function (container) {
    if (container === void 0) { container = document; }
    return new ElementSearcher(container);
};
