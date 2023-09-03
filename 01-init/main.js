"use strict";
(() => {
    class Mutante {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
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
    let wolverine = new Xmen("Wolverine", "Logan");
    let magneto = new Villian("Magento", "Magnus");
    console.log(wolverine.salverElMundo);
    console.log(magneto.conquistarElMundo);
    const printName = (character) => {
        console.log(character.realName);
    };
    printName(wolverine);
})();
(() => {
    class Avenger {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        bio() {
            return `${this.name} (${this.team})`;
        }
        static getAvgAge() {
            return this.name;
        }
    }
    Avenger.avgAge = 35;
    const antman = new Avenger("Antman", "Capitan");
    console.log(antman.bio());
    console.log(Avenger.avgAge);
    console.log(Avenger.getAvgAge());
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log("Constructor Avenger llamado!!");
        }
        getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
            console.log("Constructor Xmen llamado");
        }
        get fullName() {
            return `${this.name} - ${this.realName}`;
        }
        set fullName(name) {
            if (name.length < 3) {
                throw new Error("El nombre debe de ser mayor de 3 letras");
            }
            else {
                this.name = name;
            }
        }
    }
    const wolverine = new Xmen("Wolverine", "Logan", true);
    console.log(wolverine.fullName);
})();
(() => {
    class Apocalipsis {
        constructor(name) {
            this.name = name;
        }
        static callApocalipsis() {
            if (!Apocalipsis.intance) {
                Apocalipsis.intance = new Apocalipsis("Soy apocalipsis");
            }
            return Apocalipsis.intance;
        }
        changeName(newName) {
            this.name = newName;
        }
    }
    const apocalipsis01 = Apocalipsis.callApocalipsis("Soy Apocalipsis...");
    const apocalipsis02 = Apocalipsis.callApocalipsis("Soy Apocalipsis...");
    const apocalipsis03 = Apocalipsis.callApocalipsis("Soy Apocalipsis...");
    apocalipsis01.changeName("Xavier");
    console.log(apocalipsis01, apocalipsis02, apocalipsis03);
})();
//# sourceMappingURL=main.js.map