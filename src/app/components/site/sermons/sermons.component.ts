import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sermons',
  templateUrl: './sermons.component.html',
  styleUrls: ['./sermons.component.css']
})
export class SermonsComponent implements OnInit {

  constructor() { }

  filterMobile(){
    const mediaSearch:any = document.querySelector('.media-search ');
    mediaSearch.classList.toggle('active')
  }

  ngOnInit(): void {
  }

}
