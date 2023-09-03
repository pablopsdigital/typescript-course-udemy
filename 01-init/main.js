"use strict";
const batimovil = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4,
};
const bumblebee = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros: 4,
    disparar() {
        console.log("Disparando");
    },
};
const villanos = [
    {
        nombre: "Lex Luthor",
        edad: 54,
        mutante: false,
    },
    {
        nombre: "Erik Magnus Lehnsherr",
        edad: 49,
        mutante: true,
    },
    {
        nombre: "James Logan",
        edad: 3,
        mutante: true,
    },
];
const charles = {
    poder: "psiquico",
    estatura: 1.78,
};
const apocalipsis = {
    lider: true,
    miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"],
};
let mystique;
mystique = charles;
mystique = apocalipsis;
(() => {
    const ironman = {
        name: "Ironman",
        weapon: "Armorsuit",
    };
    const capitanAmerica = {
        name: "Capitán América",
        weapon: "Escudo",
    };
    const thor = {
        name: "Thor",
        weapon: "Mjolnir",
    };
    const avengers = [ironman, thor, capitanAmerica];
    for (const avenger of avengers) {
        console.log(avenger.name);
    }
})();
(() => {
    const avengers = {
        nick: "Samuel L. Jackson",
        ironman: " Robert Downey Jr.",
        vision: " Robert Downey Jr.",
        activo: true,
        poder: 1500,
    };
    const { poder, vision } = avengers;
    console.log(poder, vision.toUpperCase());
    const avengersArr = ["Capitán América", true, 10];
    const [capi, ironman, numero] = avengersArr;
    console.log({ capi, ironman, numero });
})();
(() => {
    const NOMBRE = "Fernando";
    console.log("let");
})();
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName("Tony");
    console.log({ name });
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName("Tony");
    console.log({ name });
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName("Tony", "segundo");
    console.log({ name });
})();
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(" ")} `;
    };
    const superman = fullName("Clark", "Joseph", "Kent");
    console.log({ superman });
})();
(() => {
    const addNumbers = (a, b) => {
        a + b;
    };
    const greet = (name) => {
        `Hola ${name}`;
    };
    const saveTheWorld = () => {
        `El mundo está salvado!`;
    };
})();
(() => {
    const hero = "Flash";
    function returnName() {
        return hero;
    }
    const activateBatiSignal = () => {
        return "Batiseñal activada!";
    };
    console.log(typeof activateBatiSignal);
    const heroName = returnName();
})();
(() => {
    let flash = {
        name: "Barry Allen",
        age: 24,
        powers: ["Súper velocidad", "Viajar en el tiempo"],
    };
    let superman = {
        name: "Barry Allen",
        age: 24,
        powers: ["Súper velocidad", "Viajar en el tiempo"],
    };
})();
(() => {
    let flash = {
        name: "Barry Allen",
        age: 24,
        powers: ["Súper velocidad", "Viajar en el tiempo"],
    };
    let superman = {
        name: "Barry Allen",
        age: 24,
        powers: ["Súper velocidad", "Viajar en el tiempo"],
    };
    console.log(flash, superman);
})();
(() => {
    let myCustomVariable = "Fernando";
    myCustomVariable = {
        name: "Bruce",
        age: 43,
        powers: [1],
    };
    console.log(myCustomVariable);
})();
(() => {
    let avenger = 123;
    let exists;
    let power;
    avenger = "Dr Strange";
    console.log(avenger.charAt(0));
    console.log(avenger.charAt(0));
    avenger = 1500;
    console.log(avenger.toFixed(2));
    avenger = 5500;
    console.log(avenger.toFixed(2));
})();
(() => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log({ numbers });
    const villians = ["Omega Rojo", "Dormammu", "Duende Verde"];
    villians.forEach((villian) => console.log(villian.toUpperCase()));
})();
(() => {
    let isSuperman = true;
    let isBatman = false;
    isSuperman = isBatman ? true : false;
    console.log({ isSuperman });
    console.log({ isBatman });
})();
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 0] = "min";
        AudioLevel[AudioLevel["medium"] = 5] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudio = AudioLevel.max;
    console.log("AudioLevel", AudioLevel);
    console.log("currentAudio", currentAudio);
})();
(() => {
    const error = (message) => {
        throw new Error(message);
    };
    error("Este es el mensaje.");
})();
(() => {
    let isActive = true;
    console.log(isActive);
})();
(() => {
    let avengers = 10;
    console.log({ avengers });
    const villians = 20;
    console.log({ villians });
    if (avengers < villians) {
        console.log("We are in trouble");
    }
    else {
        console.log("We are saved ");
    }
})();
(() => {
    var _a;
    const batman = "Batman";
    const liternaVerde = "Linterna Verde";
    const volcanNegro = "Héroe: Volcan Negro";
    const abc = 123;
    console.log(`I'm ${batman}, ${abc}`);
    console.log({ batman });
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || "There are not enough letters");
    console.log(batman.toUpperCase());
})();
(() => {
    const hero = ["Dr Strange", 100, true];
    hero[0] = "kk";
    hero[1] = 200;
    hero[2] = true;
    console.log(hero);
})();
(() => {
    function callBatman() {
        return;
    }
    const callSuperman = () => {
        return;
    };
    const a = callBatman();
    console.log(a);
})();
//# sourceMappingURL=main.js.map