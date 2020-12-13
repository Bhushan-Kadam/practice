"use strict";
exports.__esModule = true;
exports.pi = exports.Math = void 0;
var Math = /** @class */ (function () {
    function Math(p1, p2) {
        this.p1 = p1;
        this.p2 = p2;
    }
    Math.prototype.addition = function () { console.log("addition = " + (this.p1 + this.p2)); };
    Math.prototype.subtraction = function () { console.log("subtraction = " + (this.p1 - this.p2)); };
    Math.prototype.division = function () { console.log("division = " + this.p1 / this.p2); };
    Math.prototype.multiplication = function () { console.log("multiplication = " + this.p1 * this.p2); };
    return Math;
}());
exports.Math = Math;
exports.pi = 3.14;
