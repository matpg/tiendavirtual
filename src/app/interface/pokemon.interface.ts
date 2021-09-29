export interface ListaPokemon {
    pokemons?: Pokemon[];
}

export interface Pokemon {
    id?: number;
    name?: string;
    type?: string;
    HP?: number;
    Attack?: number;
    Defense?: number;
    Price?: number;
}