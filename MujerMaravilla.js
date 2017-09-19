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
var MujerMaravilla = (function (_super) {
    __extends(MujerMaravilla, _super);
    function MujerMaravilla() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MujerMaravilla.prototype.mostrar = function () {
        return 'Soy la Mujer maravilla!';
    };
    return MujerMaravilla;
}(Superheroe_1.Superheroe));
//# sourceMappingURL=MujerMaravilla.js.map