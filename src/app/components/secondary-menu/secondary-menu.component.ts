import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secondary-menu',
  templateUrl: './secondary-menu.component.html',
  styleUrls: ['./secondary-menu.component.css']
})
export class SecondaryMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  scrollTo(anchor: string) {
    document.querySelector('#' + anchor).scrollIntoView({behavior: 'smooth', block: 'start'});
  }

}
