import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-down',
  templateUrl: './scroll-down.component.html',
  styleUrls: ['./scroll-down.component.css']
})
export class ScrollDownComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  scrollTo(anchor: string) {
    document.querySelector('#' + anchor).scrollIntoView({behavior: 'smooth', block: 'start'});

  }

}
