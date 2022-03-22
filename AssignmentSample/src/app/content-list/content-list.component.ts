import { Component, OnInit } from '@angular/core';
import { Content } from "../helper-files/content-interface";
import { DigimonService } from '../services/digimon.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  digimonList: Content[];
  titleFound?: boolean;

  constructor(private digimonService: DigimonService) {
    this.digimonList = [];
  }

  ngOnInit(): void {
    this.digimonService.getContent().subscribe(listOfDigimon => this.digimonList = listOfDigimon);
  }
  
  checkForTitle(title: string): void {
    if (this.digimonList.some(d => d.title === title)) {
      this.titleFound = true;
    }
    else {
      this.titleFound = false;
    }
    if (this.digimonList.filter(d => d.title === title).length) {
      this.titleFound = true;
    }
    else {
      this.titleFound = false;
    }
  }
}
