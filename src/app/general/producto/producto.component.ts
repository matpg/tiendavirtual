import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/productos.service';
import { CategoriaService } from '../../services/categoria.service';
import { PokemonService } from '../../services/pokemon.service';
import { ListaPokemon, Pokemon } from '../../interface/pokemon.interface';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  searchTerm: string = "";
  term: string = "";
  carroCompras: Pokemon[] = [];

  constructor(public pS: ProductoService,
    public cS: CategoriaService,
    public pkS: PokemonService) {
  }

  ngOnInit(): void {

  }

  anadirAlCarro(poke: Pokemon): void {
    this.carroCompras.push(poke);
  }

  eliminarDelCarro(poke: Pokemon): void {
    let index = this.carroCompras.indexOf(poke);
    this.carroCompras.splice(index, 1);
  }

  mostrarTotal(carroCompras: Pokemon[]): number {
    let total: number = 0;
    carroCompras.forEach(element => {
      if (typeof element.Price === 'number') {
        total += element.Price;
      }
    })
    return total;
  }

}
