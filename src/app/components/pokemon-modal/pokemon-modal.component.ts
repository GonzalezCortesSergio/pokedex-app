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

    getTypeColor(typeName: string): string {

      let background = "background-color: ";

      interface Color {

        [index: string]: string;
      }

      let colores = {
        normal: "#c6c1b9",
        bug: "#8c980f",
        dark: "#3e2d23",
        dragon: "#6f5dc7",
        electric: "#f9bc1a",
        fighting: "#80351a",
        fire: "#f0400a",
        flying: "#94a4ee",
        ghost: "#5d60aa",
        grass: "#72c235",
        ground: "#d1b154",
        ice: "#76d6f4",
        poison: "#934393",
        psychic: "#ee4881",
        rock: "#b6a257",
        steel: "#b5b4c1",
        water: "#2989e7"
      } as Color

      return `${background}${colores[typeName]}`
    }
  
    @Input()
    pokemon!: Pokemon

}