import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/productos.service';
import { CategoriaService } from '../../services/categoria.service';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  searchTerm: string = "";
  term: string = "";

  constructor(public pS: ProductoService,
                public cS: CategoriaService,
                  public pkS: PokemonService) {
  }

  ngOnInit(): void {
  }

}
