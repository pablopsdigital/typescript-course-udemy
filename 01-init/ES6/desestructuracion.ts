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

  const avengersArr: [string, boolean, number] = ["Capitán América", true, 10];
  const [capi, ironman, numero] = avengersArr;
  console.log({ capi, ironman, numero });
})();
