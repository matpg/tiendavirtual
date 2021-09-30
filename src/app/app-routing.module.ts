import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './general/home/home.component';
import { Pagina404Component } from './general/pagina404/pagina404.component';
import { ProductoComponent } from './general/producto/producto.component';
import { CategoriaComponent } from './general/categoria/categoria.component';


import { RegistroComponent } from './general/registro/registro.component';
import { LoginComponent } from './general/login/login.component';
import { PedidoComponent } from './general/pedido/pedido.component';

// referencias a los componentes 
// path 'nombreruta', nombre componente
const app_routes: Routes = [
    { path: '', component: HomeComponent }, //la main
    { path: 'producto', component: ProductoComponent },
    { path: 'registro', component: RegistroComponent},
    { path: 'login', component: LoginComponent},
    { path: 'pedido', component: PedidoComponent},
    { path: 'categoria', component: CategoriaComponent},
    { path:'**', component: Pagina404Component} //default
    
];

//decorador: no olvidar importarlo
@NgModule({
    imports: [RouterModule.forRoot(app_routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }