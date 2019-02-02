import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { User } from 'src/app/modules/user/user.model';
import {UsersService} from '../../../modules/user/users.service'
@Component({ 
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UsersService]
})
export class LoginComponent implements OnInit {

  userPassword: String;
  userName: String;
  userAddress: String;
  userEmail: String;
  showLogin: Boolean;

  @Output() user: EventEmitter<User> = new EventEmitter<User>()
  constructor(private _usersService: UsersService) {
    this.showLogin = true
   }

  ngOnInit() {
  }

  toggleLoginOption = () => {
    this.showLogin = !this.showLogin;
  }

  handleRegister = () => {
    if (this.connectSystemValidator('register')) {
      this._usersService.register({username: this.userName, password: this.userPassword,
         email: this.userEmail, address: this.userAddress})
    }
  }

  handleLogin = () => {
     if (this.connectSystemValidator('login')) {
      this._usersService.login({username: this.userName, password: this.userPassword})
     }
  }

  emailValidator(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

  connectSystemValidator = (actionType) => {
    if (actionType === 'login') {
      if (!this.userName || !this.userPassword) {
        alert('username or password is missing')
        return false
      }
      return true
    } else {
      if (!this.emailValidator(this.userEmail)) {
        alert('incorrect email.')
        return false
      } else if (!this.userName || !this.userEmail || !this.userPassword || !this.userAddress) {
        alert('data is missing!')
        return false
      }
      return true
    }
  }



}
