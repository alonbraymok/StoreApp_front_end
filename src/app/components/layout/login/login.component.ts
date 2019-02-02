import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { User } from 'src/app/modules/user/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userPassword: String;
  userName: String;
  @Output() user: EventEmitter<User> = new EventEmitter<User>()
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  handleLogin = () => {
    this.http.post(`/api/auth/login`,{
      username: this.userName,
      password: this.userPassword
    }).subscribe(
      data => {
        if (data['ok']) {
          // let newUser = new User(null,null,null,null,null);
          // newUser.id = '-1';
          // newUser.username = data['msg']['username']
          // newUser.firstname = data['msg']['firstname']
          // newUser.email = data['msg']['email']
          // this.user.emit(newUser)
        } else {
          console.log('loggin error')
        }
      })
  }

}
