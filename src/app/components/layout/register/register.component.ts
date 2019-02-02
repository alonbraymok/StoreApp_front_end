import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/modules/user/user.model';
import { UserService } from 'src/app/modules/user/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {

  user: User;
  email: string;
  username: string;
  password: string;
  address: string;
  birthday: string;

  constructor(private _userService: UserService) { }

  addUser(){
    this.user = new User(this.email,this.password,this.username ,this.address,this.birthday);
    // this._userService.addNewUser(this.user);
  }
  ngOnInit() {
  }

}
