import { Component } from '@angular/core';
import { User } from './modules/user/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-end';
  currentUser: User
  public currentRoute = String;

  setNewPostfixURL(type) {
    this.currentRoute = type;
  }
  setUser(user) {
    this.currentUser = user
  }

}
