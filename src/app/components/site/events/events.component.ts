import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor() { }

  filterMobile(){
    const mediaSearch:any = document.querySelector('.media-search ');
    mediaSearch.classList.toggle('active')
  }
  
  ngOnInit(): void {
  }

}
