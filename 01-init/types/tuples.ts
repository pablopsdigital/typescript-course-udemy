(() => {
  //De inicio lo define como un string, si queremos
  //especificar que siempre el primer dato es string y el segundo
  //un número debemos definir la tupla
  // const hero = ["Dr Strange", 100];
  const hero: [string, number, boolean] = ["Dr Strange", 100, true];

  hero[0] = "kk";
  hero[1] = 200;
  hero[2] = true;
  hero[2] = "dddd"; //Como es un boolean no permite string

  console.log(hero);
})();
