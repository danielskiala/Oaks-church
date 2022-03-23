import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {

  constructor() { }

  filterMobile(){
    const mediaSearch:any = document.querySelector('.media-search ');
    mediaSearch.classList.toggle('active')
  }
  
  ngOnInit(): void {
  }

}
