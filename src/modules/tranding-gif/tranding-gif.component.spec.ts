import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrandingGifComponent } from './tranding-gif.component';

describe('TrandingGifComponent', () => {
  let component: TrandingGifComponent;
  let fixture: ComponentFixture<TrandingGifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrandingGifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrandingGifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
