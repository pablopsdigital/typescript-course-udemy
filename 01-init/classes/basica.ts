(() => {
  class Avenger {
    static avgAge: number = 35;

    constructor(
      private name: string,
      public team: string,
      public realName?: string
    ) {}

    //Creación método
    public bio() {
      return `${this.name} (${this.team})`;
    }

    //Creación método estático
    static getAvgAge() {
      return this.name;
    }
  }

  const antman: Avenger = new Avenger("Antman", "Capitan");

  console.log(antman.bio());

  //Acceso a propiedad y método estático,
  //se accede con el nombre de la clase
  console.log(Avenger.avgAge);
  console.log(Avenger.getAvgAge());
})();
