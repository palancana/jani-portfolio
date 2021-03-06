import { Component, OnInit } from '@angular/core';
import { SwiperDirective } from 'ngx-swiper-wrapper';


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
