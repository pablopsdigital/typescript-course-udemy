(() => {
  let avenger: any = 123;
  let exists;
  let power;

  //Asignamos un texto a la variable any
  avenger = "Dr Strange";
  console.log(avenger.charAt(0));

  //Aplicamos el casteo como string para tener las propiedades
  console.log((avenger as string).charAt(0));

  //Otra forma de castear es con <tipo>
  avenger = 1500;
  console.log((<number>avenger).toFixed(2));

  //Asignamos un número a la variable any
  avenger = 5500;
  console.log(avenger.toFixed(2));
})();
