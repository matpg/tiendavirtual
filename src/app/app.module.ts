import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//rutas
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
        Pagina404Component
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }