import { Injectable } from '@angular/core';

//importi isti kao i za user services
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from './models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  //injektovanje preko konstruktora HttpClienta
  constructor(private http: HttpClient) { }

  //metoda koja vraca todos za prosledjeni userId
  getTodoByUserId(userId: number): Observable<Todo[]>{
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?userId='+userId);
  }

  //NEXT STEP app-routing.module.ts
}
