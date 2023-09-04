(() => {
  interface addTwoNumbers {
    (a: number, b: number): number;
  }

  const addTwoNumbersFunction: addTwoNumbers = (a: number, b: number) => {
    return 10;
  };
})();
