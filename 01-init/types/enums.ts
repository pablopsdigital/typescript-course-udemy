(() => {
  enum AudioLevel {
    min = 0,
    medium = 5,
    max = 10,
  }

  let currentAudio = AudioLevel.max;
  console.log("AudioLevel", AudioLevel);
  console.log("currentAudio", currentAudio);
})();
