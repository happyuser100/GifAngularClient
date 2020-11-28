import { Component, OnInit } from '@angular/core';
import { GifService } from 'src/services/gif.service';

@Component({
  selector: 'app-tranding-gif',
  templateUrl: './tranding-gif.component.html',
  styleUrls: ['./tranding-gif.component.css']
})
export class TrandingGifComponent implements OnInit {

  trends;
  constructor(private gifService: GifService) { }

  ngOnInit() {
    this.gifService.searchTrending().subscribe(x=> {
      this.trends = JSON.parse(JSON.stringify(x)).data;
    })
  }
}
