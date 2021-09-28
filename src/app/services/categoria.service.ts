import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria } from '../interface/categoria.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  //variables

  categoria_: Categoria = {};

  constructor(private http: HttpClient) {
    this.cargarCategorias();

  }

  private cargarCategorias(): void {
    //console.log('metodo privado cargarCategorias');

    // this.http.get('').subscribe( (respuesta) => {});
    // lectura del archivo JSON
    this.http.get('assets/data/productos.json').subscribe((respuesta: Categoria | any) => {
      this.categoria_ = respuesta;
      //console.log('Respuesta local: ' + this.categoria_);
      //console.log(this.categoria_);

    });

  }

  private cargarCategoriasWeb(): void {
    this.http.get('https://learsixela.github.io/productos_json/productos.json')
      .subscribe((respuesta: Categoria) => {
        this.categoria_ = respuesta;
        //console.log('Respuesta desde la web: ' + this.categoria_);
      });

  }

}
