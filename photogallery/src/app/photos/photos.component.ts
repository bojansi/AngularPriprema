import { Component, OnInit } from '@angular/core';

//imports 
import { PhotosService } from '../photos.service';
import { Photo } from 'src/models/photo';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  //kreiranje liste Photo
  photos?: Photo[];

  constructor(private photoService : PhotosService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    const albumId = Number(this.route.snapshot.paramMap.get('albumId'));
    this.GetPhotoByAlbumId(albumId);
  }
  GetPhotoByAlbumId(albumId: number){
    this.photoService.getPhotos(albumId).subscribe(resp=>{
      this.photos = resp;
    })
  }

}
