import axios from "axios";
import { Pokemon } from "../interfaces/pokemon";

export const getPokemon = async (pokemonId: number): Promise<Pokemon> => {
  console.log("Hola Mundo");
  const res = await axios.get<Pokemon>(
    `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
  );
  const { data } = res;
  console.log(data.abilities[0].ability.name);
  console.log(data.abilities[0].ability.name);

  //if (true) throw new Error("Auxilio");
  return data;
};
