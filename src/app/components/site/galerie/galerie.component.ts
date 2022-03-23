import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';


@Component({
  selector: 'app-galerie',
  templateUrl: './galerie.component.html',
  styleUrls: ['./galerie.component.css']
})
export class GalerieComponent implements OnInit {

  constructor() { }

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

    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    speed: 2000,
  };


  ngAfterViewInit(): void {
    const galleryModal = document.querySelector('.gallery-modal');
    const gallerWrapper = document.querySelector('.gallery-modal-wrapper');

    const sees = document.querySelectorAll('.see');
    const imageFirst = document.querySelector('.imageFirst');

    sees.forEach(see => {
      see.addEventListener('click', function(){
        // const parent = see.parentElement;
        // const imageTarget = parent.querySelector('img');
        // const srcUrl = imageTarget.getAttribute('src');
        // imageFirst.setAttribute("src", srcUrl);
        galleryModal.classList.add('active');
      })
    });

    galleryModal.addEventListener('click', function(){
      this.classList.remove('active');
    });

    gallerWrapper.addEventListener('click', function(e){
      e.stopPropagation();
    });
  }

  ngOnInit(): void {
  }

}
