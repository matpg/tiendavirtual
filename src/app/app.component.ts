import { Component } from '@angular/core';
import { ProductoService } from './services/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tiendavirtual';
  constructor(public pS: ProductoService) {
  }
}
