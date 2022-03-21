import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Pokemon } from '../../helper-files/Pokemon';

@Component({
  selector: 'app-add-content',
  templateUrl: './add-content.component.html',
  styleUrls: ['./add-content.component.scss']
})
export class AddContentComponent implements OnInit {
  @Output() newPokemonEvent: EventEmitter<Pokemon> = new EventEmitter<Pokemon>();
  @Output() updatePokemonEvent: EventEmitter<Pokemon> = new EventEmitter<Pokemon>();
  newPokemon?: Pokemon;

  constructor() { }

  ngOnInit(): void {
  }

  addPokemon(name: string, imageUrl: string, description: string, tags: string): void {
    this.newPokemon = {
      // id: parseInt(id),
      name: name,
      imageUrl: imageUrl,
      description: description,
      tags: tags.split(",")
    };
    this.newPokemonEvent.emit(this.newPokemon);
  }
  
  updatePokemon(id: string, name: string, imageUrl: string, description: string, tags: string): void {
    this.newPokemon = {
      id: parseInt(id),
      name: name,
      imageUrl: imageUrl,
      description: description,
      tags: tags.split(",")
    };
    this.updatePokemonEvent.emit(this.newPokemon);
  }

}
