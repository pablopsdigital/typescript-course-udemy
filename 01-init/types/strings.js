"use strict";
//El uso de funión autoivocada es para
//evitar que el código choque en caso de existir
//variables con el mismo nombre en otras partes del código
(() => {
    var _a;
    const batman = "Batman";
    const liternaVerde = "Linterna Verde";
    const volcanNegro = "Héroe: Volcan Negro";
    const abc = 123;
    //Para concatenar el number internamente se usa el toString()
    console.log(`I'm ${batman}, ${abc}`);
    console.log({ batman });
    // el ? se conoce como null check
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || "There are not enough letters");
    console.log(batman.toUpperCase());
})();
