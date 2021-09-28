import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class ProductoService {
    constructor() {
        console.log('Este es el producto service');
    }
}