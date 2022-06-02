import { Injectable } from '@angular/core';
//imports
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Photo } from 'src/models/photo';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http:HttpClient) { }

  getPhotos(albumId: number): Observable<Photo[]>{
    return this.http.get<Photo[]>("https://jsonplaceholder.typicode.com/photos?albumId="+albumId);
  }
}
