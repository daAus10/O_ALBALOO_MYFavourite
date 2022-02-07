import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../helper-files/Pokemon';

@Pipe({
  name: 'defaultTrainerName'
})
export class DefaultTrainerNamePipe implements PipeTransform {

  transform(poke?: Pokemon, dTrainer?: string): string {
    return poke?.trainerName ?? dTrainer ?? "Default Ash";
  }

}
