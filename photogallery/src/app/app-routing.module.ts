import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import components
import { PhotosComponent } from './photos/photos.component';
import { AlbumsComponent } from './albums/albums.component';

//definisanje ruta
const routes: Routes = [
  {path:'', redirectTo: '/albums', pathMatch: 'full'}, //default routte redirect to /albums
  {path:'albums', component: AlbumsComponent},
  {path:'photos/:albumId', component: PhotosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
