import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../../helper-files/Pokemon';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
  @Input() pokemonster?: Pokemon;
  // @Input() pokemonList?: Pokemon[];
  colour: string = "dodgerblue";

  constructor() {
    // this.pokemonster = { id: 0, }
  }

  ngOnInit(): void {
    if (this.pokemonster?.type == "Normal") {
      console.log(this.pokemonster?.name);
    }
    // this.pokemonList?.push({
    //   id: 10,
    //   // type: 'dragon',
    //   name: 'Misdreavus',
    //   imageUrl: '',
    //   description: "It's a mischievious pokemon",
    //   trainerName: 'Alex',
    //   tags: ["maildelivery"]
    // });
  }
  runClickFunction(): void {
    console.log("CLicked the image");
  }



  // returntag(): string {
  //   return `<div class="type">${this.pikachu ? this.pikachu.type : ''}</div>`;
  // }

}
