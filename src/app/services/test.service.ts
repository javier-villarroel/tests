import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { map, Observable } from 'rxjs';

const API_URL = 'https://pokeapi.co/api/v2/pokemon/';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  private http = inject(HttpClient);

  searchPokemon(query: string): Observable<any[]> {
    query = query.toLowerCase();

    return this.http.get<any[]>(`${API_URL}${query}`).pipe(
      map((resp) => {
        return resp.map((country) => {
            return country
        });
      })
    );
  }
}