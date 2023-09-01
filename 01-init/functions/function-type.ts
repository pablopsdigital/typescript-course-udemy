(() => {
  const addNumbers = (a: number, b: number) => {
    a + b;
  };

  const greet = (name: string) => {
    `Hola ${name}`;
  };

  const saveTheWorld = () => {
    `El mundo está salvado!`;
  };

  //   //Asignamos un tipo funcion
  //   let myFunction: (a: number, b: number) => number;
  //   myFunction = addNumbers;
  //   console.log(myFunction(1, 2));

  //   myFunction = greet;
  //   console.log(myFunction("Fernando"));

  //   let myFunction3: () => string;
  //   myFunction3 = saveTheWorld;
  //   console.log(myFunction3());
})();
