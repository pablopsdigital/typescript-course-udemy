import { genericFunction, printObject } from "./generics/generics";
import { getPokemon } from "./generics/get-pokemon";
import { Villain } from "./interfaces/villain";

printObject(123);
printObject(new Date());
printObject({ a: 1, b: 2, c: 3 });
printObject([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
printObject("Hola Mundo");

console.log(genericFunction(3.141618).toFixed(2));
console.log(genericFunction("Hola Mundo").toLocaleLowerCase());

const deadtool = {
  name: "Deadpool",
  realName: "Wade Winston Wilson",
  dangerLevel: 130,
};

console.log(genericFunction<Villain>(deadtool).dangerLevel);

getPokemon(4)
  .then((pokemon) => console.log(pokemon.sprites.front_default))
  .catch((error) => console.log(error))
  .finally(() => console.log("Fin "));
