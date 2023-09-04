(() => {
  interface Xmen {
    name: string;
    realName: string;
    mutantPower(id: number): string;
  }

  interface Human {
    age: number;
  }

  class Mutant implements Xmen, Human {
    public name: string;
    public realName: string;
    public age: number;

    mutantPower(id: number): string {
      return this.name + " " + this.realName;
    }
  }
})();
