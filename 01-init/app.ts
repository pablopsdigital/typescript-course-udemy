const msg: string = "Hola mundo";

const hero = {
  name: "Ironman",
  age: 45,
};

hero.age = 50;

//Especificar el tipo de dato
const a: number = 10;
let b: number = 10;

// Any es cualquier cosa ganamso flexibilidad
// pero perdemos control
let c: any = 10;

function sayHello(msg: string) {
  console.log("MESSAGE: " + msg);
}

//Función anónima autoinvocada
(() => {
  const a: number = 10;
  console.log(a);
})();

//Salida por consola
sayHello("This is the message.");
console.log(hero.age + a);
