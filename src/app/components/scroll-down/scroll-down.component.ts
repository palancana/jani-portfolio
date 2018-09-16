import { Component, OnInit } from '@angular/core';
import { SwiperDirective } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-scroll-down',
  templateUrl: './scroll-down.component.html',
  styleUrls: ['./scroll-down.component.css']
})
export class ScrollDownComponent implements OnInit {

  constructor(private swiper: SwiperDirective) { }

  ngOnInit() {
  }

  scrollToNextSlide() {
    this.swiper.nextSlide();
  }

}
