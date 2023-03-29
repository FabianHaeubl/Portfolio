import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageGalleryComponent } from './main-page-gallery.component';

describe('MainPageGalleryComponent', () => {
  let component: MainPageGalleryComponent;
  let fixture: ComponentFixture<MainPageGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPageGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
