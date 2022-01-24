import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/helper-files/Pokemon';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  myPokemon: Pokemon; // charmander

  constructor() {
    this.myPokemon = {
      id: 2,
      type: 'Fire',
      imageUrl: "",
      description: "Leave his tail alone!"
    };

  }

  ngOnInit(): void {
  }

}
