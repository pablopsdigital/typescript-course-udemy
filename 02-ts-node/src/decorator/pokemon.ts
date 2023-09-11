function printToConsole(constructor: Function) {
  console.log(constructor);
}

const printToConsoleConditinal = (print: boolean = false): Function => {
  if (print) {
    return printToConsole;
  } else {
    return () => {};
  }
};

//Bloquear cualquier expansión de metodos o propiedades de una clase
const bloquearPrototipo = function (constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
};

@bloquearPrototipo
@printToConsoleConditinal(true)
export class Pokemon {
  public publicApi: string = "https://pokeapi.co";
  constructor(public name: string) {}
}
