(() => {
  //Definición de un tipo
  type Hero = {
    name: string;
    age?: number;
    powers: string[];
    getName?: () => string;
  };

  //Objeto literal normal
  let flash: Hero = {
    name: "Barry Allen",
    age: 24,
    powers: ["Súper velocidad", "Viajar en el tiempo"],
  };

  let superman: Hero = {
    name: "Barry Allen",
    age: 24,
    powers: ["Súper velocidad", "Viajar en el tiempo"],
  };

  console.log(flash, superman);
})();
