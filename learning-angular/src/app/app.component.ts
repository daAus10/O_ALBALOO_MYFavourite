import { Component } from '@angular/core';
import { Pokemon } from 'src/helper-files/Pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = '<em>Learning</em>';
  myList: PokemonList;

  constructor() {

    // let name: string; // explicitly set the type to string
    // name = 'Peter';
    // name = 10;

    // let name = 'Peter'; // implicitly set the type to string
    // name = 9;

    // let typescriptIsTypesafe: boolean = true;
    // let javascriptIsTypesafe = false;

    // let name: any;

    // name = 'Peter';
    // name = 50;

    // let person = {
    //   name: 'Peter',
    //   lastName: 'Nikita',
    //   favouriteNumber: 10
    // };

    let pikachu: Pokemon;
    pikachu = {
      id: 0,
      type: "Electric",
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/7/73/Pikachu_artwork_for_Pok%C3%A9mon_Red_and_Blue.webp/220px-Pikachu_artwork_for_Pok%C3%A9mon_Red_and_Blue.webp.png",
      description: "Easily the most popular pokemon around",
      trainerName: "Ash"
    };

    let eevee: Pokemon;
    eevee = {
      id: 1,
      type: 'Normal',
      imageUrl: "",
      description: "The normalest of types, an evolves into every type"
    }


    this.processPokemon(pikachu);
    this.processPokemon(eevee);

    this.myList = new PokemonList(pikachu);
    console.log("The log out for my list of pokemon", this.myList.items);
    // this.myList.items = [];

  }

  processPokemon(myPokemon: Pokemon): void {
    console.log("Type of my pokemon is ", myPokemon.trainerName, " more data about the pokemon ", myPokemon);
  }
}


class PokemonList {
  static pokemonCount = 0;
  private _items: Pokemon[];

  constructor(item: Pokemon) {
    this._items = []; // initialize array
    this._items[0] = item;
    this.increaseCount();
  }

  get items(): Pokemon[] {
    return this._items;
  }
  set items(newList: Pokemon[]) {
    this._items = newList;
  }

  increaseCount() {
    return ++PokemonList.pokemonCount;
  }
}
