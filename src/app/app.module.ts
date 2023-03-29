import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ContentComponent } from './content/content.component';
import { CardComponent } from './card/card.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MainPageGalleryComponent } from './main-page-gallery/main-page-gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    CardComponent,
    MainPageComponent,
    MainPageGalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
