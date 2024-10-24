import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InicioComponent } from './components/inicio/inicio.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { provideHttpClient } from '@angular/common/http';
import { MaterialModule } from './modules/material.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { PokemonModalComponent } from './components/pokemon-modal/pokemon-modal.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemModalComponent } from './components/item-modal/item-modal.component';
import { MtListComponent } from './components/mt-list/mt-list.component';
import { MtModalComponent } from './components/mt-modal/mt-modal.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    PokemonListComponent,
    PokemonModalComponent,
    ItemListComponent,
    ItemModalComponent,
    MtListComponent,
    MtModalComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MaterialModule,
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
