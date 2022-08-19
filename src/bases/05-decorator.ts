class NewPokemon {
  constructor(public readonly id: number, public name: string) {}

  speak() {
    console.log(`new pokemon`);
  }
}

const MyDecorator = () => {
  return (target: Function) => {
    return NewPokemon;
  };
};

@MyDecorator()
export class PokemonDecorator {
  constructor(public readonly id: number, public name: string) {}

  speak() {
    console.log(this.name);
  }
}

export const pica = new PokemonDecorator(12, "Ash");

pica.speak();
