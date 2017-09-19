"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Superheroe = (function () {
    function Superheroe() {
        this.poder = 100;
    }
    Superheroe.prototype.getPoder = function () {
        return this.poder;
    };
    Superheroe.prototype.setPoder = function (value) {
        this.poder = value;
    };
    Superheroe.prototype.daniar = function (danio) {
        this.setPoder(this.getPoder() - danio);
    };
    Superheroe.prototype.volar = function () {
        console.log('Volandoooo....');
    };
    return Superheroe;
}());
exports.Superheroe = Superheroe;
//# sourceMappingURL=Superheroe.js.map