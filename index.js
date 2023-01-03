"use strict";
exports.__esModule = true;
exports.ToType = void 0;
var ToType = /** @class */ (function () {
    function ToType() {
    }
    ToType.asAny = function (value) {
        return value;
    };
    ToType.asUnknown = function (value) {
        return value;
    };
    ToType.asNever = function (value) {
        return value;
    };
    return ToType;
}());
exports.ToType = ToType;
