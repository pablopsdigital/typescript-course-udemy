//El uso de funión autoivocada es para
//evitar que el código choque en caso de existir
//variables con el mismo nombre en otras partes del código
(() => {
  const batman: string = "Batman";
  const liternaVerde: string = "Linterna Verde";
  const volcanNegro: string = "Héroe: Volcan Negro";

  const abc: number = 123;

  //Para concatenar el number internamente se usa el toString()
  console.log(`I'm ${batman}, ${abc}`);

  console.log({ batman });
  // el ? se conoce como null check
  console.log(batman[10]?.toUpperCase() || "There are not enough letters");

  console.log(batman.toUpperCase());
})();
