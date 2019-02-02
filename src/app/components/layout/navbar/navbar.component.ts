import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/modules/user/user.model';
import { UserService } from 'src/app/modules/user/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [UserService]
})
export class NavbarComponent implements OnInit {
  @Output() urlChanged: EventEmitter<any> = new EventEmitter();
  showLoginModal: Boolean = true;
  @Input() user: User;
  newUser: User;
  constructor(private _userService: UserService) {
   }

  ngOnInit() {
  }

  addNewUser(){
    
  }

  notifyObservers(postfix) {
    this.urlChanged.emit('postfix');
  }

  toggleNavbar() {
    const value = 20;
  }

  activeLogin = () => {
    this.showLoginModal = !this.showLoginModal
  }

  showLogin = () => {
    this.showLoginModal
    console.log('blaaaa')
  }

}
