import { Component } from '@angular/core';
import { CategoriaService } from './services/categoria.service';
import { PokemonService } from './services/pokemon.service';
import { ProductoService } from './services/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tiendavirtual';
  //carga de todos los archivos json(o consumo de api) o toda la data que queremos cargar previa a la pagina
  constructor(public pS: ProductoService,
                public cS: CategoriaService,
                  public pkS: PokemonService) {
  }
}
