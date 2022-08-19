export const pokemonIds = [1,12,45,67,90,112];

export const pokemon: Pokemon = {
  id: 1,
  name: 'pikachu',
}

interface Pokemon {
  id: number;
  name: string;
  type?:  string;
}


export const pokemons: Pokemon[] = [];

pokemons.push(pokemon);
