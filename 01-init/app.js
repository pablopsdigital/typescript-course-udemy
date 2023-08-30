"use strict";
const msg = "Hola mundo";
const hero = {
    name: "Ironman",
    age: 45,
};
hero.age = 50;
//Especificar el tipo de dato
const a = 10;
let b = 10;
// Any es cualquier cosa ganamso flexibilidad
// pero perdemos control
let c = 10;
function sayHello(msg) {
    console.log("MESSAGE: " + msg);
}
//Función anónima autoinvocada
(() => {
    const a = 10;
    console.log(a);
})();
//Salida por consola
sayHello("This is the message.");
console.log(hero.age + a);
