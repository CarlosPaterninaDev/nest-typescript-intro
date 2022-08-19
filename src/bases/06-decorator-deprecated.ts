
const Deprecated = (deprecationReason: string) => {
  return (target: any, memberName: string, propertyDescriptor: PropertyDescriptor) => {
    // console.log({target})
    return {
      get() {
        const wrapperFn = (...args: any[]) => {
          console.warn(`Method ${ memberName } is deprecated with reason: ${ deprecationReason }`);
          //! Llamar la función propiamente con sus argumentos
          propertyDescriptor.value.apply(this, args); 
        }
        return wrapperFn;
      }
    }
  }   
}



export class PokemonDecorator {
  constructor(public readonly id: number, public name: string) {}

  @Deprecated('Deprecado para la version 2')
  speak() {
    console.log(this.name);
  }
}

export const pica = new PokemonDecorator(12, "Ash");

pica.speak();
