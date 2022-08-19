
import { HttpAdapter, PokeApiAdapter, PokeApiFetch } from "../api/pokeApi.adapter";
import { PokemonResponse } from "../interfaces/pokeapi-response.interface";


export class Pokemon {

  get imageUrl(): string {
    return `pokemon/${this.id}.png`;
  }

  constructor(public readonly id: number, public name: string, private http: HttpAdapter) {}

  speak() {
    return `${this.name} ${this.name}!`;
  }

  async getMoves() {
    const  data = await this.http.get<PokemonResponse>("https://pokeapi.co/api/v2/pokemon/4");
    return data.moves;
  }
}

const pokeApi =  new PokeApiAdapter();
// TODO: Facilmente reemplazable const pokeApiFetch =  new PokeApiFetch();



export const pica = new Pokemon(21,'Pica', pokeApi);
console.log(pica)
pica.getMoves().then( e => console.log(e))
