import { Component } from '@angular/core';
import { Pokemon } from '../helper-files/Pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Learning';
  pokemonsters: Pokemon[];
  birthday: Date;

  constructor() {
    this.birthday = new Date();
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
    this.pokemonsters = [{
      id: 0,
      type: "Electric",
      name: "Pikachu",
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/7/73/Pikachu_artwork_for_Pok%C3%A9mon_Red_and_Blue.webp/220px-Pikachu_artwork_for_Pok%C3%A9mon_Red_and_Blue.webp.png",
      description: "Easily the most popular pokemon around",
      trainerName: "Ash",
      tags: ["Starter", "maincharacter"]
    }, {
      id: 1,
      type: 'Normal',
      name: 'Eevee',
      imageUrl: "",
      description: "The normalest of types, an evolves into every type",
      tags: ["Gary's first pokemon"]
    }, {
      id: 2,
      // type: 'dragon',
      name: 'Dragonite',
      imageUrl: '',
      description: "The third form of this pokemon",
      trainerName: 'Lance',
      tags: ["maildelivery"]
    }];

    console.log("First console log");

    setTimeout(function () {
      console.log("Second console log");
    }, 0);

    Promise.resolve().then(function () {
      console.log("Third console log");
    });

    console.log("Fourth console log");

    let ourPromise = new Promise(function (success, fail) {
      let testPass = false;
      if (testPass) {
        success("Success was achieved!");
      }
      else {
        fail("Failure :(");
      }
    });

    ourPromise.then(successResult =>
      console.log(successResult))
      .catch((failResult) => { return console.log(failResult); });

    let getStuff = async function () {
      return "SpecialValue";
    }

    let getTheSameStuff = function () {
      return Promise.resolve("differentValue");
    }

    // getStuff().then(value => console.log("First promise get stuff returns: ", value));

    //different way to represent functions
    let getAllTheStuff = async () => {
      const theFirstStuff = await getStuff();
      const theSecondStuff = await getTheSameStuff();
      //returns both promises
      return [theFirstStuff, theSecondStuff];
    }

    getAllTheStuff();

    let getAllTheStuffButFaster = async () => {
      const theFirstStuff = getStuff();
      const theSecondStuff = getTheSameStuff();
      //note we moved the await from the two calls above to this Promise.all call
      //now when this function runs, it will run both async functions concurrent
      return await Promise.all([theFirstStuff, theSecondStuff]);
    }

    getAllTheStuffButFaster();



    console.log(this.pokemonsters);
  }

  updatePage(sTerm: string): void {
    console.log("Before changing it ", sTerm);
    sTerm = "I changed it the bad way";
    console.log("After changing it ", sTerm);
    // this.title = "Changed value of title";
    // run something here
  }
  addPokemonToList(newPokemonOnTheListSide: Pokemon): void {
    console.log("The list before I push: ", this.pokemonsters);
    this.pokemonsters.push(newPokemonOnTheListSide);
    console.log("The list AFTER I push: ", this.pokemonsters);

    // We need to clone the array for the pipe to work
    // This is an old way of cloning an object
    // this.pokemonsters = Object.assign([], this.pokemonsters);

    // This is a newer, faster way to clone an array
    this.pokemonsters = [...this.pokemonsters]; // using the spread operator

  }
}

