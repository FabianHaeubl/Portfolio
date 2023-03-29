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
        animate('1s')
      ]),
      transition('left => middle', [
        animate('0s')
      ]),
      transition('middle => right', [
        animate('1s')
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
  scrollPos: number = 0;
  scrollEnd: boolean = true;
  scrolled: boolean = false;
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
      {url: "Trilobit_Base_Final.jpg", type: "image"},
      {url: "LogoGAIA.jpg", type: "image"},
      {url: "Slideshow_converted.mp4", type: "video"},
      {url: "earth1.png", type: "image"} ];
    this.changeBackgrounds();
  }

  galleryScroll(event: any): void{
    //this.scrollEnd = false;
    if(this.scrolled)
      return;

    if(event.deltaX > 0 || event.deltaY < 0){
      //left to right
      this.scrollRight = true;
      this.IncreaseBackgroundIterator();

    } else if(event.deltaX < 0 || event.deltaY > 0){
      //right to left
      this.scrollLeft = true;
      this.DecreaseBackgroundIterator();
    }

    this.scrolled = true;
    //this.scrollPos += event.deltaX + event.deltaY;

    //wait for end of scroll
    //this.scrollEnd = true;
    /*setTimeout(() => {
      if(this.scrollEnd){
        this.endScroll();
      }
    }, 500);*/
  }

  startAnimation(){
    this.scrollLeft = false;
    this.scrollRight = false;
  }

  endScroll(){

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
    if(leftSrc.type == 'image'){
      this.leftUrl = BackgroundSource.BackgroundSourcesPath + leftSrc.url;
      this.leftVideoUrl = undefined;
    } else{
      this.leftVideoUrl = BackgroundSource.BackgroundSourcesPath + leftSrc.url;
      this.leftUrl = undefined;
    }

    if(middleSrc.type == 'image'){
      this.middleUrl = BackgroundSource.BackgroundSourcesPath + middleSrc.url;
      this.middleVideoUrl = undefined;
    } else{
      this.middleVideoUrl = BackgroundSource.BackgroundSourcesPath + middleSrc.url;
      this.middleUrl = undefined;
    }

    if(rightSrc.type == 'image'){
      this.rightUrl = BackgroundSource.BackgroundSourcesPath + rightSrc.url;
      this.rightVideoUrl = undefined;
    }else{
      this.rightVideoUrl = BackgroundSource.BackgroundSourcesPath + rightSrc.url;
      this.rightUrl = undefined;
    }
  }
}
