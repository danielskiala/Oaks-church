import { Component, OnInit } from '@angular/core';
// import SwiperCore, { Pagination, Navigation ,SwiperOptions} from "swiper";
// import Swiper, { Autoplay } from 'swiper'
import { SwiperOptions } from 'swiper';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }


  config_slider: SwiperOptions = {
    // npm install --save ngx-useful-swiper@latest swiper
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      1600: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      1080: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      1366: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      1024: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      500: {
        slidesPerView: 1,
        spaceBetween: 0,
      }
    },
    loop: true,
    speed: 4000,
    autoplay:true,
  };

  config: SwiperOptions = {
    // npm install --save ngx-useful-swiper@latest swiper
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      1600: {
        slidesPerView: 4,
        spaceBetween: -140,
      },
      1080: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      1366: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: -100,
      },
      500: {
        slidesPerView: 1,
        spaceBetween: 0,
      }
    },
    loop: true,
    speed: 2000,
  };


  config_1: SwiperOptions = {
    // npm install --save ngx-useful-swiper@latest swiper
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      1600: {
        slidesPerView: 3,
        spaceBetween: 350,
      },
      1366: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      1024:{
        slidesPerView: 2,
        spaceBetween: 0,
      },
      768:{
        slidesPerView: 1,
        spaceBetween: 0,
      },
      500: {
        slidesPerView: 1,
        spaceBetween: 100,
      }
    },
    loop: true,
    speed: 2000,
  };

  config_2: SwiperOptions = {
    // npm install --save ngx-useful-swiper@latest swiper
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      1600: {
        slidesPerView: 4,
        spaceBetween: 60,
      },
      1080: {
        slidesPerView: 3,
        spaceBetween: -20,
      },
      1366: {
        slidesPerView: 3,
        spaceBetween: -120,
      },
      1024:{
        slidesPerView:3,
        spaceBetween:0,
      },
      768:{
        slidesPerView:2,
        spaceBetween:0,
      },
      500:{
        slidesPerView:2,
        spaceBetween:0,
      }
    },
    loop: true,
    speed: 2000,
  };


  ngOnInit(): void {
  }

}
