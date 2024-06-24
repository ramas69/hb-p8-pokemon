
export interface MangaInterface {
    title:string;
    author:string;
    genre:string;
    volumes:number;
    published: string;
}


export interface UserInterface{
    name:string;
    username:string;
    email:string;
    
}

export interface PokemonInterface {

    pokedex_id : number;
    name : {
        fr:string;
        jp:string;
    };
    sprites: {
        regular:string;
        shiny:string;
    }

    types:TypesPokemon [];
}


export interface TypesPokemon {
  
            name:string;
            image:string;
     
}


export interface formationInterface {
    image: string,
      stackTechnique: string[],
      dates: string,
      titre: string,
      nombreDePlaces: number,
      tarif: number,
}



