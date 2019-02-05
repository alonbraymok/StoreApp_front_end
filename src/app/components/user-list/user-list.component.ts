import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/modules/user/users.service'
import { User, UserWithId } from 'src/app/modules/user/user.model'
import { DataService} from 'src/app/modules/data.service'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [UsersService,DataService]
})
export class UserListComponent implements OnInit {

  users: any[];
  user: any;
  clickButton: string ='Click here';

  constructor(private _usersService: UsersService, private dataService: DataService) { }
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

  editUserInfo(username: string, email: string, password: string, address: string, id: string){
    console.log(username);
    this.user = new UserWithId(id,email,password,username,address);
    debugger
    this.dataService.changeMessage(this.user);
    
  }

  deleteUser(email: string){
    this._usersService.deleteUserByEmail(email);
    this.getCurrentUsers();

  }
}
