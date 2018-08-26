import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private scroller: ViewportScroller) { }

  ngOnInit() {
  }

  scrollTo(anchor: string) {
    this.scroller.scrollToAnchor(anchor);
  }

}
