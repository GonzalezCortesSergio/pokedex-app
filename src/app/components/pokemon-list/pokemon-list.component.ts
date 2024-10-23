import { Component, inject, OnInit } from '@angular/core';
import { Pokemon, PokemonPreview } from '../../interfaces/pokemon.interface';
import { PokemonsService } from '../../services/pokemons.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { map } from 'rxjs';

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

    let id = parseInt(pokemon.url.slice(-2, -1))
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`;
  }

  ngOnInit(): void {
    this.getPokemonList();
  }

}
