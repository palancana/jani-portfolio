import { Component, OnInit } from '@angular/core';
import { SwiperDirective } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-small-scroll-down',
  templateUrl: './small-scroll-down.component.html',
  styleUrls: ['./small-scroll-down.component.css']
})
export class SmallScrollDownComponent implements OnInit {

  constructor(private swiper: SwiperDirective) { }

  ngOnInit() {
  }

  scrollToNextSlide() {
    this.swiper.nextSlide();
  }

}
