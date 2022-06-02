import { Component, OnInit } from '@angular/core';

//imports
import { AlbumsService } from '../albums.service';
import { Album } from 'src/models/album';


@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  //kreiranje niza
  albums?:Album[];
  constructor(private albumService: AlbumsService) { }

  //potrebno je injektovanje servisa u konstruktor
  ngOnInit(): void {
    //vraca albume
    this.GetAlbums();
  }
  GetAlbums(){
    this.albumService.getAlbums().subscribe(res=>{
      this.albums = res;
    })
  }

}
