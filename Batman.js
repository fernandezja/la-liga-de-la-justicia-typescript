"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Superheroe_1 = require("./Superheroe");
//Para que esta clase sea accesible desde otro archivo debo exportarla
var Batman = (function (_super) {
    __extends(Batman, _super);
    function Batman() {
        return _super.call(this) || this;
    }
    Batman.prototype.volar = function () {
        console.error('Que tomaste!? YO no vuelo');
    };
    Batman.prototype.mostrar = function () {
        return 'I am Batman!';
    };
    return Batman;
}(Superheroe_1.Superheroe));
exports.default = Batman;
//# sourceMappingURL=Batman.js.map