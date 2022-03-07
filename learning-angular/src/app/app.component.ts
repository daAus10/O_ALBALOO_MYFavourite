import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../helper-files/Pokemon';
import { PokemonService } from './services/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string = 'Learning';
  pokemonsters: Pokemon[];
  birthday: Date;

  constructor(private pokemonService: PokemonService) {
    this.birthday = new Date();
    this.pokemonsters = [];
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

  ngOnInit(): void {
    // got the content synchronously
    // this.pokemonsters = this.pokemonService.getContent();

    // get the content asynchronously
    this.pokemonService.getContentObs().subscribe(pokemonarray => {
      this.pokemonsters = pokemonarray;
    });

    // asynchronous, but isolated scope due to function
    // this.pokemonService.getContentObs().subscribe(function (pokemonarray) {
    //   this.pokemonsters = pokemonarray;
    // });

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

