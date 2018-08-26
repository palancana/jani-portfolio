import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-scroll-down',
  templateUrl: './scroll-down.component.html',
  styleUrls: ['./scroll-down.component.css']
})
export class ScrollDownComponent implements OnInit {

  constructor(private scroller: ViewportScroller) { }

  ngOnInit() {
  }

  scrollTo(anchor: string) {
    this.scroller.scrollToAnchor(anchor);
  }

}
