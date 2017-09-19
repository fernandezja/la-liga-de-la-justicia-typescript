"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Para acceder a las otras clases y sus propiedades y métodos debo importarlas
var Batman_1 = require("./Batman");
var Superheroe_1 = require("./Superheroe");
var Startup = (function () {
    function Startup() {
    }
    Startup.main = function () {
        console.log('Comenzando...');
        var b1 = new Batman_1.default();
        b1.volar();
        b1.daniar(10);
        //ERROR!!!!! ===>> CLASE ABSTRACTA!!
        var s1 = new Superheroe_1.Superheroe();
        // console.log('Terminando...');
        return;
    };
    return Startup;
}());
Startup.main();
//# sourceMappingURL=App.js.map