import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  //injektovanje httpClienta u konstruktor
  constructor(private http:HttpClient) { }

  //funkcija koja vraca observal users (listu usera) sa prosledjenog linka pomocu http.get metode..
  getUsers():Observable<User[]>{
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }
}
