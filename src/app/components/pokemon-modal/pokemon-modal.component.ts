import { Component, inject, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Pokemon } from '../../interfaces/pokemon.interface';
import { PokemonsService } from '../../services/pokemons.service';

@Component({
  selector: 'app-pokemon-modal',
  templateUrl: './pokemon-modal.component.html',
  styleUrl: './pokemon-modal.component.css'
})
export class PokemonModalComponent {
    @Input()
    index = 0;
    description: string = '';  


    activeModal = inject(NgbActiveModal);
  
    constructor(private pokemonsService: PokemonsService) {}
  
    getImage() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${this.index}.gif`;
    }
  
    capitalizeFirstLetter(string: string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  
    isLast(item: any, array: any[]): boolean {
      return array[array.length - 1] === item;
    }
  
    @Input()
    pokemon!: Pokemon

}