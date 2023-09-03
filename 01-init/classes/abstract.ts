(() => {
  abstract class Mutante {
    constructor(public name: string, public realName: string) {}
  }

  class Xmen extends Mutante {
    salverElMundo() {
      return "El mundo está a salvo!";
    }
  }

  class Villian extends Mutante {
    conquistarElMundo() {
      return "Mundo conquitado!";
    }
  }

  //Podemos asignar una clase como tipo de dato
  let wolverine = new Xmen("Wolverine", "Logan");
  let magneto = new Villian("Magento", "Magnus");

  console.log(wolverine.salverElMundo);
  console.log(magneto.conquistarElMundo);

  const printName = (character: Mutante) => {
    console.log(character.realName);
  };

  printName(wolverine);
})();
