import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from './general/producto/producto.component';
import { ProductoComponent } from './general/login/login.component';
import { ProductoComponent } from './general/categoria/categoria.component';
import { ProductoComponent } from './general/registro/registro.component';

// referencias a los componentes
const app_routes: Routes = [
    { path: '', component: ProductoComponent},
    { path: '', component: LoginComponent},
    { path: '', component: CategoriaComponent},
    { path: '', component: RegistroComponent},

];
// Decorador: no olvidar
@NgModule({
    imports: [RouterModule.forRoot(),]
})
export class AppRoutingModule {}