import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/modules/user/user.service';
import {User} from 'src/app/modules/user/user.model'

@Component({
  selector: 'app-mainhero',
  templateUrl: './mainhero.component.html',
  styleUrls: ['./mainhero.component.css'],
  providers: [UserService]
})


export class MainheroComponent implements OnInit {
  title: String;
  content: String;
  description: String;
  newUsers: User[];

  constructor(private _userService: UserService) { }

  ngOnInit() {
    this.title = "- Welcome To Super Suisa! -";
    this.content = "this is the dynamic content!";
    this.description = "another desription";
  }

  getAllUsers = () => {
    this.newUsers = this._userService.getCurrentUsers()
  }

}
