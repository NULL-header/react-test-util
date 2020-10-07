"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderDomFactory = void 0;
var react_1 = __importDefault(require("react"));
var react_2 = require("@testing-library/react");
exports.renderDomFactory = function (elements, getProps) {
    if (getProps === void 0) { getProps = function () { return ({}); }; }
    return function (options) {
        if (options === void 0) { options = {}; }
        var props = __assign(__assign({}, getProps()), options);
        var passedElements = react_1.default.cloneElement(elements, props);
        var domTree = react_2.render(passedElements);
        return { container: domTree.container, props: props };
    };
};
