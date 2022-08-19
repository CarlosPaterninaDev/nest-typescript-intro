import axios from "axios";
import { Move, PokemonResponse } from "../interfaces/pokeapi-response.interface";

export class PokemonExplicito {
  public id: number;
  public name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

export class PokemonImplicito {
  get imageUrl(): string {
    return `pokemon/${this.id}.png`;
  }

  constructor(public readonly id: number, public name: string) {}

  speak() {
    return `${this.name} ${this.name}!`;
  }

  async getMoves() : Promise<Move[]> {
    const { data } = await axios.get<PokemonResponse>("https://pokeapi.co/api/v2/pokemon/4");
    return data.moves;
  }
}

export const pikachu = new PokemonExplicito(12, "Pica");
export const pikachuImplicito = new PokemonImplicito(12, "Pica");
console.log(pikachuImplicito.speak());
console.log(pikachuImplicito.getMoves());

console.log(pikachuImplicito.imageUrl);
