(() => {
  class Apocalipsis {
    static intance: Apocalipsis;

    //con private este constructor solo puede ser llamado
    //dentro de la misma clase
    private constructor(public name: string) {}

    //Retorno Apocalisis
    //Principio Singleton, siempre la misma instancia
    static callApocalipsis(): Apocalipsis {
      //Comprobamos si existe una instancia ya creada
      //si existe se devuelve sino se crea una
      if (!Apocalipsis.intance) {
        Apocalipsis.intance = new Apocalipsis("Soy apocalipsis");
      }

      return Apocalipsis.intance;
    }

    //Método de clase
    changeName(newName: string): void {
      this.name = newName;
    }
  }

  //No se inicializa con new sino que se accede a la clase
  const apocalipsis01 = Apocalipsis.callApocalipsis("Soy Apocalipsis...");
  const apocalipsis02 = Apocalipsis.callApocalipsis("Soy Apocalipsis...");
  const apocalipsis03 = Apocalipsis.callApocalipsis("Soy Apocalipsis...");

  //Cambiar el nombre con el método de clase
  apocalipsis01.changeName("Xavier");

  //const apocalipsis02 = new Apocalipsis("Soy Apocalipsis...");
  console.log(apocalipsis01, apocalipsis02, apocalipsis03);
})();
