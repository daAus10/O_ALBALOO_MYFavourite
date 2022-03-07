import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { POKEMONSTERS } from '../../helper-files/contentDb';
import { Pokemon } from '../../helper-files/Pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }

  getContent(): Pokemon[] { // returns content synchronously
    return POKEMONSTERS;
  }

  getContentObs(): Observable<Pokemon[]> {
    return of(POKEMONSTERS);
  }
}
