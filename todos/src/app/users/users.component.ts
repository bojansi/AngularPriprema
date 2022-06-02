import { Component, OnInit } from '@angular/core';

//sada se mora injektovati services
import { UsersService } from '../users.service';
import { User } from '../models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  //potrebna je kreirati listu user-a
  users?:User[];

  //potrebno je injektovatit userServices
  constructor(private userService : UsersService) { }

  //ngOnInit() - kada se komponenta prikazuje.. zavisi od rutting-modula.ts
  ngOnInit(): void {
    //kada se pozove komponenta prikazi mi users
    this.GetUsers();
  }

  //dovlacenje svih usera
  GetUsers(){
    this.userService.getUsers().subscribe(res=>{  //pomocu subscribe se podaci ansihrono dovlace
      this.users = res;
    })
  }

  //---------------------------> SLEDECI KORAK user.component.html<---------------------------

}
