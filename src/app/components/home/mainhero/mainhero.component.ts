import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/modules/user/user.service';
import {User} from 'src/app/modules/user/user.model'
import { UsersService } from 'src/app/modules/user/users.service';

@Component({
  selector: 'app-mainhero',
  templateUrl: './mainhero.component.html',
  styleUrls: ['./mainhero.component.css'],
  providers: [UsersService]
})


export class MainheroComponent implements OnInit {
  title: String;
  content: String;
  description: String;
  activeUser: any;

  constructor(private _userService: UsersService) { }

  ngOnInit() {
    this.isUserActive()
  }

  isUserActive = () => {
    let activeUser;
    this.content = "this is the dynamic content!";
    

    if (sessionStorage.getItem('activeUser')) {
      activeUser = JSON.parse(sessionStorage.getItem('activeUser'))
      this.title = `Hi ${activeUser.username} and welcome to SuperSuisa!`
      return true
    } else {
      this.title = `Hi, Welcome To SuperSuisa`
      return false
    }
  }

}
