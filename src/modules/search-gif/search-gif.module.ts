import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchGifRoutingModule } from './search-gif-routing.module';
import { SearchGifComponent } from './search-gif.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [SearchGifComponent],
  imports: [
    CommonModule,
    SearchGifRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SearchGifModule { }
