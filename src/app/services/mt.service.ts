import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MoveRes, Mt, MtResponse } from '../interfaces/mt.interface';

@Injectable({
  providedIn: 'root'
})
export class MtService {

  API_URL = "https://pokeapi.co/api/v2/machine";

  constructor(private http: HttpClient) { }

  getMts(): Observable<MtResponse> {

    return this.http.get(this.API_URL) as Observable<MtResponse>;
  }

  getMt(mtUrl: string): Observable<Mt> {

    return this.http.get(mtUrl) as Observable<Mt>;
  }

  getMove(moveUrl: string): Observable<MoveRes>{

    return this.http.get(moveUrl) as Observable<MoveRes>;
  }
}
