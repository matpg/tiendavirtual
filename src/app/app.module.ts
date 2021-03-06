import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Rutas
import { AppRoutingModule } from './app-routing.module';

//Componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './general/header/header.component';
import { AsideComponent } from './general/aside/aside.component';
import { FooterComponent } from './general/footer/footer.component';
import { ProductoComponent } from './general/producto/producto.component';
import { CategoriaComponent } from './general/categoria/categoria.component';
import { LoginComponent } from './general/login/login.component';
import { RegistroComponent } from './general/registro/registro.component';
import { HomeComponent } from './general/home/home.component';
import { Pagina404Component } from './general/pagina404/pagina404.component';
import { PruebasComponent } from './general/pruebas/pruebas.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//Busqueda
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { PedidoComponent } from './general/pedido/pedido.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        AsideComponent,
        FooterComponent,
        ProductoComponent,
        CategoriaComponent,
        LoginComponent,
        RegistroComponent,
        HomeComponent,
        Pagina404Component,
        PruebasComponent,
        PedidoComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        //Siempre se debe importar para forms
        FormsModule,
        //para json
        HttpClientModule,
        //para la busqueda,
        Ng2SearchPipeModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }