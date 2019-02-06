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
  activeUser: any;
  constructor(private _userService: UserService) {
   }

  ngOnInit() {
  }

  addNewUser(){
    
  }

  isAdmin = () => {
    if (!this.activeUser) return false
    return this.activeUser.isAdmin
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
  
  userLoggedIn = () => {
    const activeUser = sessionStorage.getItem('activeUser')
    this.activeUser = JSON.parse(activeUser)
    return sessionStorage.getItem('activeUser') !== null
  }

  logoutUser = () => {
    this.activeUser = {}
    sessionStorage.removeItem('activeUser')
  }

}
