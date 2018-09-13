import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-scroll-down',
  templateUrl: './small-scroll-down.component.html',
  styleUrls: ['./small-scroll-down.component.css']
})
export class SmallScrollDownComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  scrollTo(anchor: string) {
    document.querySelector('#' + anchor).scrollIntoView({behavior: 'smooth', block: 'start'});

  }

}
