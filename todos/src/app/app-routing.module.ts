import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//moramo importovati obe komponente
import { UsersComponent } from './users/users.component';
import { TodoComponent } from './todo/todo.component';

//definisanje rupa
const routes: Routes = [
  { path:'', redirectTo: '/users', pathMatch: 'full'}, //default route koja se redirektuje na '/users' rutu
  { path:'users', component:UsersComponent}, //ruta za userComponent
  { path:'todo/:userId', component:TodoComponent} //ruta za todoComponent
];

//--------------------------->RUTE SREDJENE NEXT STEP SREDJIVANJE KOMPONENTI<---------------------------

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
