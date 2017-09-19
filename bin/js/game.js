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
var Batman = (function (_super) {
    __extends(Batman, _super);
    function Batman() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Batman.prototype.volar = function () {
        console.error('Que tomaste!? YO no vuelo');
    };
    Batman.prototype.mostrar = function () {
        return 'I am Batman!';
    };
    return Batman;
}(Superheroe));
/// <reference path="Superheroe.ts" />
/// <reference path="Batman.ts" />
var Startup = (function () {
    function Startup() {
    }
    Startup.main = function () {
        console.log('Comenzando...');
        var b1 = new Batman();
        //let s1 = new Superheroe();
        b1.daniar(10);
        b1.volar();
        console.log('Terminando...');
        return;
    };
    return Startup;
}());
var MujerMaravilla = (function (_super) {
    __extends(MujerMaravilla, _super);
    function MujerMaravilla() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MujerMaravilla.prototype.mostrar = function () {
        return 'Soy la Mujer maravilla!';
    };
    return MujerMaravilla;
}(Superheroe));
var PeriodistaCNN = (function () {
    function PeriodistaCNN() {
    }
    PeriodistaCNN.prototype.entrevista = function (sh) {
        console.log(sh.mostrar());
    };
    return PeriodistaCNN;
}());
/// <reference path="Interfaces/IMostreable.ts" />
var Presidente = (function () {
    function Presidente() {
    }
    Presidente.prototype.mostrar = function () {
        return 'Soy el PRESI!';
    };
    return Presidente;
}());
//# sourceMappingURL=game.js.map