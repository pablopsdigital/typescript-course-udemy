(() => {
  const error = (message: string): never => {
    throw new Error(message);
  };

  error("Este es el mensaje.");
})();
