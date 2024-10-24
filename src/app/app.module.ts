import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ItemListComponent } from './components/item-list/item-list.component';
import { provideHttpClient } from '@angular/common/http';
import { ItemModalComponent } from './components/item-modal/item-modal.component';
import { MtListComponent } from './components/mt-list/mt-list.component';
import { MtModalComponent } from './components/mt-modal/mt-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    ItemModalComponent,
    MtListComponent,
    MtModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
