(() => {
  interface Address {
    id: number;
    zip: string;
    city: string;
  }

  interface Client {
    name: string;
    age: number;
    address: Address; //Segundo nivel de objeto
    getFullAddress(id: string): string;
  }

  //Implementación de la interfaz
  const client: Client = {
    name: "Fernando",
    age: 25,
    address: {
      id: 5,
      zip: "string",
      city: "string",
    },
    getFullAddress(id: string) {
      return this.address.city;
    },
  };
})();
