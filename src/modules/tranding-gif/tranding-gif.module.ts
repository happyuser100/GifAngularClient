import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrandingGifRoutingModule } from './tranding-gif-routing.module';
import { TrandingGifComponent } from './tranding-gif.component';


@NgModule({
  declarations: [TrandingGifComponent],
  imports: [
    CommonModule,
    TrandingGifRoutingModule
  ]
})
export class TrandingGifModule { }
