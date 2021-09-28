import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ListaProducto, Producto } from '../interface/producto.interface';

@Injectable({
    providedIn: 'root'
})

export class ProductoService {

    lista_productos: ListaProducto = {};
    producto_: Producto = {};
    prod: string = "ao";

    constructor(private http: HttpClient) {
        this.cargaProductos();
    }


    public cargaProductos() {

        this.http.get('assets/data/productos.json')
            .subscribe((respuesta: Producto | any) => {
                this.lista_productos = respuesta;
            });
    }

}