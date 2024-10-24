import { Component, inject } from '@angular/core';
import { ItemPreview } from '../../interfaces/item.interface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ItemsService } from '../../services/items.service';
import { Mt } from '../../interfaces/mt.interface';
import { MtService } from '../../services/mt.service';
import { PokemonsService } from '../../services/pokemons.service';
import { PokemonPreview } from '../../interfaces/pokemon.interface';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

  itemList: ItemPreview[] = [];

  constructor(private serviceMt: MtService, private itemService: ItemsService, private service: PokemonsService) {}

  private modalService = inject(NgbModal);
  

  getItems(): void {

    this.itemService.getItems().subscribe(res => {

      this.itemList = res.results;
    })
  }

  ngOnInit(): void {
    this.getItems();
    this.getMtList();
    this.getPokemonList();
  }

  getImage(item: ItemPreview): string {

    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${item.name}.png`
  }

  capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


  mtList: Mt[] = [];

 

  getMtList(): void {

    this.serviceMt.getMts().subscribe(res => {

      res.results.forEach((mt, index)=> {

        this.serviceMt.getMt(mt.url).subscribe(res => {

          this.itemService.getItem(res.item.url).subscribe(item => {

            res.itemRes = item;
          })

          this.serviceMt.getMove(res.move.url).subscribe(move => {

            res.moveRes = move;

            this.mtList.push(res);
          })
          
        })
      })
    })
  }

  listaPokemon: PokemonPreview[] = []


  getPokemonList(): void {

    this.service.getPokemonList().subscribe(res => {

      this.listaPokemon = res.results;
    })
  }

  getImagePokemons(pokemon: PokemonPreview): string {

    let id = pokemon.url.match(/\d+/g)?.[1]
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`;
  }

}
