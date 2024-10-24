import { FlavorTextEntry, Item, ItemPreview } from "./item.interface"

export interface MtResponse {
    count: number
    next: string
    previous: any
    results: MtPreview[]
  }
  
  export interface MtPreview {
    url: string
  }

  export interface Mt {
    id: number
    item: ItemPreview
    move: Move
    version_group: VersionGroup
    itemRes: Item
    moveRes: MoveRes
  }
  
  
  export interface Move {
    name: string
    url: string
  }
  
  export interface VersionGroup {
    name: string
    url: string
  }

  export interface MoveRes {
    accuracy: number
    id: number
    learned_by_pokemon: LearnedByPokemon[]
    name: string
    type: Type;
    flavor_text_entries: FlavorTextEntryMove[]
  }

  export interface FlavorTextEntryMove{

    flavor_text: string
  }

  
  export interface LearnedByPokemon {
    name: string
    url: string
  }
  
  
  export interface Type {
    name: string
    url: string
  }
  