import { Component, OnInit } from '@angular/core';
import { SwiperComponent, SwiperModule, SwiperDirective } from 'ngx-swiper-wrapper';
import { SwiperEvents, SwiperEvent } from 'ngx-swiper-wrapper/dist/lib/swiper.interfaces';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private swiper: SwiperDirective) {
  }

  ngOnInit() {
  }

  scrollTo(slideNumber: number) {
    this.swiper.setIndex(slideNumber);
  }


}
