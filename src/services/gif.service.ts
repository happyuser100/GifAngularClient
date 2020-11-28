import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GifService {
  apiURL = 'http://localhost:27072/Giphy';
  constructor(private http: HttpClient) { }

  searchTrending()
  {
    return this.http.get(this.apiURL + '/SearchTrend');
  }


  searchGiphy(search)
  {
    return this.http.get(this.apiURL + '/SearchGiphy/search=' + search);
  }
}
