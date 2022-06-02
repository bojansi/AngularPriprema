import { Component, OnInit } from '@angular/core';

//import services i model
import { TodoService } from '../todo.service';
import { Todo } from '../models/todo';

//import koji pamti koju rutu tj koji todo za kog korisnika otvara
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  //lista todo
  todos?:Todo[];

  //injektovanje servisa i rute u konstruktor
  constructor(private todoService : TodoService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    //prikaz svih todos         //za ovaj deo potreban ActivatedRoute
    const userId = Number(this.route.snapshot.paramMap.get('userId')); //pretvaranje userId-a u Number
    this.getTodosByUserId(userId);//za ovaj deo potreban ActivatedRoute
  }

  //metoda za vracanje todos na osnovu userId-a
  getTodosByUserId(userId:number){
    this.todoService.getTodoByUserId(userId).subscribe(resp=>{
      this.todos = resp;
    })
  }

}
