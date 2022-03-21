import { Injectable } from '@angular/core';
import { InMemoryDbService } from "angular-in-memory-web-api";
import { POKEMONSTERS } from '../../helper-files/contentDb';
import { Pokemon } from '../../helper-files/Pokemon';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    // setting it to the value of our array of content
    const content : Pokemon[] = POKEMONSTERS;
    return {content};
  }

  genId(content: Pokemon[]): number { // [0, 1, 2]
    return content.length > 0 ? Math.max(...content.map(c => { return c.id ?? 0 })) + 1 : 2000;
  }
}
