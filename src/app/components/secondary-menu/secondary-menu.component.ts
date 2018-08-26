import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';


@Component({
  selector: 'app-secondary-menu',
  templateUrl: './secondary-menu.component.html',
  styleUrls: ['./secondary-menu.component.css']
})
export class SecondaryMenuComponent implements OnInit {

  constructor(private scroller: ViewportScroller) { }

  ngOnInit() {
  }

  scrollTo(anchor: string) {
    this.scroller.scrollToPosition([1000000000, 1000000000]);
  }

}
