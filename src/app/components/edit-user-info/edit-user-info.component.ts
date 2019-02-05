import { Component, OnInit } from '@angular/core';
import { User, UserWithId } from 'src/app/modules/user/user.model'
import { DataService} from 'src/app/modules/data.service'

import { UsersService } from 'src/app/modules/user/users.service';

@Component({
  selector: 'app-edit-user-info',
  templateUrl: './edit-user-info.component.html',
  styleUrls: ['./edit-user-info.component.css']
})
export class EditUserInfoComponent implements OnInit {
  
  userName: string
  userPassword: string
  userEmail: string
  userAddress: string
  userId: string;

  editUser: UserWithId;

  constructor(private _dataService: DataService, private _usersService: UsersService) { }

  ngOnInit() {
    debugger
    this._dataService.currentMessage.subscribe(data => {
    this.userId = data["id"];
    this.userName = data["username"];
    this.userPassword = data["password"];
    this.userEmail = data["email"];
    this.userAddress = data["address"];
    });
       
  }
  
  editUserInfo(){
    debugger
    this.editUser = new UserWithId(this.userId, this.userEmail, this.userPassword, 
    this.userName, this.userAddress);
    this._usersService.editUserInfo(this.editUser).subscribe(
      res => {
        alert(JSON.stringify(res['msg']))
      }
    )
  }

}
