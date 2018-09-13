import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';


@Component({
  selector: 'app-makeup-project',
  templateUrl: './makeup-project.component.html',
  styleUrls: ['./makeup-project.component.css']
})
export class MakeupProjectComponent implements OnInit {

  constructor(private scroller: ViewportScroller) { }

  ngOnInit() {
  }

  scrollTo(anchor: string) {
    this.scroller.scrollToAnchor(anchor);
  }

}
