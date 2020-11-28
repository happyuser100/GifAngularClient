import { Component, OnInit } from '@angular/core';
import { GifService } from 'src/services/gif.service';

@Component({
  selector: 'app-search-gif',
  templateUrl: './search-gif.component.html',
  styleUrls: ['./search-gif.component.css']
})
export class SearchGifComponent implements OnInit {
  searchGifs;
  searchString = "";
  constructor(private gifService: GifService) { }

  ngOnInit() {
  }

  searchClick()
  {
    debugger
    this.gifService.searchGiphy(this.searchString).subscribe(x=> {
      this.searchGifs = JSON.parse(JSON.stringify(x)).data;
    })
  }

}
