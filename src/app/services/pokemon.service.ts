import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { ListaPokemon, Pokemon } from '../interface/pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokedex: ListaPokemon = {};
  pokemon_: Pokemon = {};

  constructor(private http: HttpClient) {
    console.log("Cargando productos...");
    this.cargaProductos();
  }


  public cargaProductos() {
    this.http.get('assets/data/pokemon.json')
      .subscribe((respuesta: Pokemon | any) => {
        //console.log("prueba 1 ", respuesta);
        this.pokedex = respuesta;
        console.log("Productos cargados.");
        //console.log("prueba 2 ", this.pokedex);

      });
  }
}
