import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/modules/user/users.service'
import { User } from 'src/app/modules/user/user.model'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [UsersService]
})
export class UserListComponent implements OnInit {

  users: any[];

  clickButton: string ='Click here';

  constructor(private _usersService: UsersService) { }
  email: string;

  ngOnInit() {
    this.getCurrentUsers();
  }
  getUserWithParam(){
    if(this.clickButton == 'Click here'){
      //this.users = this._usersService.getUserWithParams();
      this.clickButton = 'Back';
      
    }else{
      this._usersService.updateCurrentUsers();
      //this.users = this._usersService.getCurrentUsers();
      this.clickButton = 'Click here';
    }

  }

  getCurrentUsers(){
    this._usersService.getCurrentUsers().subscribe(data => {
      this.users = data['msg']});
  }

  editUser(user: User){
    
  }

  deleteUser(email: string){
    this._usersService.deleteUserByEmail(email);
    this.getCurrentUsers();
  }
}
