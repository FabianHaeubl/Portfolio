import {trigger,state, style, transition, animate} from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  animations: [
    trigger('scroll', [
      // ...
      state('middle', style({
        left: '-70vw'
      })),
      state('left', style({
        left: '0vw'
      })),
      state('right', style({
        left: '70vw'
      })),
      transition('middle => left', [
        animate('2s')
      ]),
      transition('left => middle', [
        animate('0s')
      ]),
      transition('middle => right', [
        animate('2s')
      ]),
      transition('right => middle', [
        animate('0s')
      ]),
    ]),
  ],
})
export class MainPageComponent implements OnInit {

  scrollLeft: boolean = false;
  scrollRight: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  startScroll(){
    console.log("scroll Started");
  }

  galleryScroll(event: any, pictures: any): void{
    console.log(this.scrollLeft, this.scrollRight);
    if(event.deltaX > 0 || event.deltaY > 0){
      //left to right
      this.scrollLeft = true;
    } else if(event.deltaX < 0 || event.deltaY < 0){
      //right to left
      this.scrollRight = true;
    }
  }

  resetBool(){
    this.scrollRight = false;
    this.scrollLeft = false;
  }
}
