import { Injectable } from '@angular/core';
//imports
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album } from 'src/models/album';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  //create list of albums

  constructor(private http : HttpClient) { 

  }
  getAlbums(): Observable<Album[]>{
    return this.http.get<Album[]>("https://jsonplaceholder.typicode.com/albums");
  }
}
