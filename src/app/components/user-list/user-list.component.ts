import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/modules/user/user.service'
import { User } from 'src/app/modules/user/user.model'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [UserService]
})
export class UserListComponent implements OnInit {

  users: User[] =
    [new User('test@gmail.com','123456','Alon braymok','Tel-aviv','28-5-1992'),
     new User('test@gmail.com','123456','Alon braymok','Tel-aviv','28-5-1992'),
     new User('test@gmail.com','123456','Alon braymok','Tel-aviv','28-5-1992')
  ]
  constructor(private _userService: UserService) { }
  email: string;

  ngOnInit() {
    //this.users = this._userService.getCurrentUsers();
    this.users.forEach(user=>{
      console.log(user);
    })
  }
  getUserWithParam(){
    this.users = this._userService.getUserWithParams();
  }
  editUser(user: User){
    
  }

  deleteUser(user: User){
    this._userService.deleteSingilUser(user);
  }
}
