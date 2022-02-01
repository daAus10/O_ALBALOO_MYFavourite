import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
  list: ContentList;
  item1: Content;
  item2: Content;
  item3: Content;

  constructor() {
    this.item1 = {
      id: 0,
      title: 'Agumon',
      description: "He's orange",
      creator: 'Tai',
      imgURL: 'https://upload.wikimedia.org/wikipedia/en/5/5b/Agumonappearance.png',
      type: "Rookie"
    };
    this.item2 = {
      id: 1,
      title: 'Gabumon',
      description: "He's like a unicorn dog",
      creator: 'Matt',
      imgURL: 'https://static.wikia.nocookie.net/digimon/images/d/d1/Gabumon_b.jpg'
    };
    this.item3 = {
      id: 2,
      title: 'Biyomon',
      description: "She's pink and she flies",
      creator: 'Sora',
      imgURL: 'https://upload.wikimedia.org/wikipedia/it/thumb/d/d5/Biyomon.png/390px-Biyomon.png',
      type: 'Rookie'
    };
    this.list = new ContentList();
    this.list.addContent(this.item1);
    this.list.addContent(this.item2);
    this.list.addContent(this.item3);
    // console.log("Looking at the content list ", this.list.contentArray, " and the length is: ", this.list.arrayLength());
    // console.log("The html is: ", this.list.generateHtml(0));

  }

  ngOnInit(): void {
  }

}
