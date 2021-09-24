import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './general/home/home.component';
import { Pagina404Component } from './general/pagina404/pagina404.component';
import { ProductoComponent } from './general/producto/producto.component';
import { RegistroComponent } from './general/registro/registro.component';


// referencias a los componentes 
// path 'nombreruta', nombre componente
const app_routes: Routes = [
    { path: '', component: HomeComponent }, //la main
    { path: 'producto', component: ProductoComponent },
    { path: 'registrarse', component: RegistrarseComponent},
    { path:'**', component: Pagina404Component}, //default

];

//decorador: no olvidar importarlo
@NgModule({
    imports: [RouterModule.forRoot(app_routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }