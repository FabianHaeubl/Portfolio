import { Component, OnInit } from '@angular/core';
import { Data } from '../data';
import { PictureData } from '../picture-data';

@Component({
  selector: 'app-main-page-gallery',
  templateUrl: './main-page-gallery.component.html',
  styleUrls: ['./main-page-gallery.component.scss']
})
export class MainPageGalleryComponent implements OnInit {

  columns: number = 3;

  constructor() { }

  ngOnInit(): void {
  }



  getRow():Array<number>{
    return new Array(Math.ceil((Data.data.length - 1)/this.columns));
  }

  getPictureRow(i: number): Array<PictureData>{
    return Data.data.slice(i*this.columns, (i+1)*this.columns)
  }

}
