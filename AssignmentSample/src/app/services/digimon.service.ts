import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from '../helper-files/content-interface';
import { DIGIMONLIST } from '../helper-files/contentDb';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class DigimonService {

  constructor(private messageService: MessageService) { }

  getContent(): Observable<Content[]> {
    this.messageService.add("Content array loaded!");
    return of(DIGIMONLIST);
  }

  getContentItem(id: number): Observable<Content>{
    this.messageService.add(`Content Item at id: ${id}`);
    return of(DIGIMONLIST[id]);
  }
}
