import {User} from './user.model'
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable()

export class UsersService {
  private activeUser: any;

    constructor(private http: HttpClient) { }

    login = (user) => {
      this.http.post('/api/auth/login', {
        username: user.username,
        password: user.password
      }).subscribe(
        res => {
          if (res['ok']) {
            this.activeUser = res['msg']
            sessionStorage.setItem('activeUser', JSON.stringify(res['msg']))
          } else { 
            alert(res['msg'])
          }
        }
      )
      }

    register = (user) => {
      this.http.post('/api/auth/register', {
        username: user.username,
        password: user.password,
        email: user.email,
        address: user.address
      }).subscribe(
        res => {
          if (res['ok']) {
            this.activeUser = res['msg']
            alert(`Thank you ${this.activeUser.username}, Registration Completed`)
          } else {
            alert(res['msg'])
          }
        }
      )
    }

    getActiveUser = () => this.activeUser

}