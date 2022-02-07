import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../helper-files/Pokemon';

@Pipe({
  name: 'contentTagged'
})
export class ContentTaggedPipe implements PipeTransform {

  transform(pokemonList: Pokemon[]): Pokemon[] {
    return pokemonList.filter(function (p) {
      return p.tags != null ? p.tags.length != 0 : null;
    });
  }

}
