import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item, ItemResponse } from '../interfaces/item.interface';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  API_URL = "https://pokeapi.co/api/v2/item";

  constructor(private http: HttpClient) { }

  getItems(): Observable<ItemResponse> {

    return this.http.get(this.API_URL) as Observable<ItemResponse>;
  }


  getItem(itemUrl: string): Observable<Item> {

    return this.http.get(itemUrl) as Observable<Item>;
  }
}
