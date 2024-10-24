import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { MtListComponent } from './components/mt-list/mt-list.component';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: '', redirectTo: '/inicio', pathMatch: 'full'},
  {path: 'pokemons', component: PokemonListComponent},
  {path: 'items', component: ItemListComponent},
  {path: 'mts', component: MtListComponent},
  //{ path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
