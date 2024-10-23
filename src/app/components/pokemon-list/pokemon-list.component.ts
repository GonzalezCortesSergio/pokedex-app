import { Component, inject, OnInit } from '@angular/core';
import { Pokemon, PokemonPreview } from '../../interfaces/pokemon.interface';
import { PokemonsService } from '../../services/pokemons.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { map } from 'rxjs';
import { PokemonModalComponent } from '../pokemon-modal/pokemon-modal.component';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent implements OnInit{

  listaPokemon: PokemonPreview[] = []

  private modalService = inject(NgbModal);

  constructor(private service: PokemonsService) {}

  getPokemonList(): void {

    this.service.getPokemonList().subscribe(res => {

      this.listaPokemon = res.results;
    })
  }

  getImage(pokemon: PokemonPreview): string {

    let id = pokemon.url.match(/\d+/g)?.[1]
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`;
  }

  openModal(pokemonUrl: string, index: number) {

    const modalRef = this.modalService.open(PokemonModalComponent, { size: 'lg' });

    this.service.getPokemon(pokemonUrl).subscribe(res => {

      modalRef.componentInstance.pokemon = res;
      modalRef.componentInstance.index = index;
    })
  }
  capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  ngOnInit(): void {
      this.getPokemonList();
  }

}
