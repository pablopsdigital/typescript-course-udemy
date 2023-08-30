(() => {
  let isSuperman: boolean = true;
  let isBatman: boolean = false;

  //Esto que está permitido en javascript en typescript
  //falla isSuperman solo puede devolver un boolena
  // isSuperman = isBatman ? "ABC" : "XYZ";

  isSuperman = isBatman ? true : false;

  //Al ponerlo entre llaves sale el nombre por consola
  console.log({ isSuperman });
  console.log({ isBatman });
})();
