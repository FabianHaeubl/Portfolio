import {trigger,state, style, transition, animate} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { BackgroundSource } from '../background-source';

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
        left: '-140vw'
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
  leftUrl: string | undefined;
  middleUrl: string | undefined;
  rightUrl: string | undefined;
  leftVideoUrl: string | undefined;
  middleVideoUrl: string | undefined;
  rightVideoUrl: string | undefined;

  backgrounds: BackgroundSource[] = [];
  backgroundsIterator: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.backgrounds = [
      {url: "Trilobit_Base_Final.jpg", type: "jpg"},
      {url: "Logo GAIA.jpg", type: "jpg"},
      {url: "Slideshow.mp4", type: "mp4"},
      {url: "earth1.jpg", type: "jpg"} ];
    this.changeBackgrounds();
  }

  galleryScroll(event: any): void{
    console.log(event.deltaY);
    if(event.deltaX > 0 || event.deltaY < 0){
      //left to right
      this.scrollRight = true;
      this.IncreaseBackgroundIterator();
    } else if(event.deltaX < 0 || event.deltaY > 0){
      //right to left
      this.scrollLeft = true;
      this.DecreaseBackgroundIterator();
    }

  }

  IncreaseBackgroundIterator(){
    this.ChangeBackgroundsIterator( + 1);
  }

  DecreaseBackgroundIterator(){
    this.ChangeBackgroundsIterator( - 1);
  }

  ChangeBackgroundsIterator( value: number){
    this.backgroundsIterator += value;
    if(this.backgroundsIterator > this.backgrounds.length - 1){
      this.backgroundsIterator = 0;
    } else if(this.backgroundsIterator < 0){
      this.backgroundsIterator = this.backgrounds.length - 1;
    }
  }

  resetBool(){
    this.scrollRight = false;
    this.scrollLeft = false;
    this.changeBackgrounds();
  }

  GetBackgroundsIterator(counter: number){
    if(counter < 0){
      return this.backgrounds.length + counter;
    } else if( counter > this.backgrounds.length - 1 ){
      return counter % this.backgrounds.length;
    }
    return counter;
  }



  changeBackgrounds(){
    let leftSrc: BackgroundSource = this.backgrounds[this.GetBackgroundsIterator(this.backgroundsIterator - 1)];
    let middleSrc: BackgroundSource = this.backgrounds[this.backgroundsIterator];
    let rightSrc: BackgroundSource = this.backgrounds[this.GetBackgroundsIterator(this.backgroundsIterator + 1)];
    if(leftSrc.type == 'jpg')
      this.leftUrl = BackgroundSource.BackgroundSourcesPath + leftSrc.url;
    else
      this.leftVideoUrl = BackgroundSource.BackgroundSourcesPath + leftSrc.url;

    if(middleSrc.type == 'jpg')
      this.middleUrl = BackgroundSource.BackgroundSourcesPath + middleSrc.url;
    else
      this.middleVideoUrl = BackgroundSource.BackgroundSourcesPath + middleSrc.url;

    if(rightSrc.type == 'jpg')
      this.rightUrl = BackgroundSource.BackgroundSourcesPath + rightSrc.url;
    else
      this.rightVideoUrl = BackgroundSource.BackgroundSourcesPath + rightSrc.url;
  }
}
