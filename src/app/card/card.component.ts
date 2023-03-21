import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  mouseOverCard: boolean = false;

  flipCard: boolean = false;
  flipDuration: number = 0.5;

  constructor() { }

  ngOnInit(): void {
  }

  changeCardSide(hover: boolean): void{
    this.mouseOverCard = hover;
    setTimeout((hover: boolean)=> {
      if(hover == this.mouseOverCard){
        this.flipCard = this.mouseOverCard;
      }
    }, this.flipDuration * 1000, hover);
  }

}
