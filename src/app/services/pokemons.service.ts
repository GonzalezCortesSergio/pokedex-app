import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon, PokemonResponse, Species, SpeciesResult } from '../interfaces/pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  API_URL = "https://pokeapi.co/api/v2/pokemon/";

  constructor(private http: HttpClient) { }

  getPokemonList(): Observable<PokemonResponse> {

    return this.http.get(this.API_URL) as Observable<PokemonResponse>;
  }

  getPokemon(pokemonUrl: string): Observable<Pokemon> {

    return this.http.get(pokemonUrl) as Observable<Pokemon>;
  }

  getPokemonDescription(speciesUrl : string): Observable<SpeciesResult> {
    return this.http.get<SpeciesResult>(speciesUrl);
  }
}
