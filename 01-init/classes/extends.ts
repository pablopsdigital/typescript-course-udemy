(() => {
  class Avenger {
    constructor(public name: string, public realName: string) {
      console.log("Constructor Avenger llamado!!");
    }

    private getFullName() {
      return `${this.name} ${this.realName}`;
    }
  }

  class Xmen extends Avenger {
    constructor(name: string, realName: string, public isMutant: boolean) {
      super(name, realName);
      console.log("Constructor Xmen llamado");
    }

    get fullName() {
      return `${this.name} - ${this.realName}`;
    }

    set fullName(name: string) {
      if (name.length < 3) {
        throw new Error("El nombre debe de ser mayor de 3 letras");
      } else {
        this.name = name;
      }
    }
  }

  const wolverine = new Xmen("Wolverine", "Logan", true);

  console.log(wolverine.fullName);
})();
