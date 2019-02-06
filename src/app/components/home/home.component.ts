import { Component, OnInit } from '@angular/core';
import { CanActivate } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements CanActivate {

  isAdmin = () => {
    const user = sessionStorage.getItem('activeUser')
    if (!user) return false
    const parsed = JSON.parse(user)
    if (parsed['isAdmin']) {
      return true
    }
    return false
  }
  canActivate() {
    return this.isAdmin()
  }
  constructor() { }

  ngOnInit() {
  }

}
