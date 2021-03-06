import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './general/footer/footer.component';
import { NavbarComponent } from './general/navbar/navbar.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { Error404Component } from './paginas/error404/error404.component';
import { LoginComponent } from './paginas/login/login.component';
import { PrivadoComponent } from './paginas/privado/privado.component';
import { PokemonPipe } from './pipes/pokemon.pipe';
import { MensajesComponent } from './componentes/mensajes/mensajes.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    InicioComponent,
    Error404Component,
    LoginComponent,
    PrivadoComponent,
    PokemonPipe,
    MensajesComponent
  ],
  imports: [
    BrowserModule,        // Modulo para la coenxion con el navegador
    HttpClientModule,     // Modulo para llamadas por HTTP
    FormsModule,          // Modulo para usar Formularios con bananaInABox
    ReactiveFormsModule,  // Modulo para usar Formularios reactivos
    AppRoutingModule      // Modulo para el ruteo de paginas
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
