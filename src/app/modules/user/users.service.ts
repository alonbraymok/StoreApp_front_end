import {User} from './user.model'
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable()

export class UsersService {
  private activeUser: any;
  private users: User[];

    constructor(private http: HttpClient) {
      this.updateCurrentUsers();
     }

    updateCurrentUsers = () => {
     
      this.http.get(`/api/manage/users/`).subscribe(
          data => {
              if (data['ok']) {
                  this.users = data['msg'];   
                              
              } else {
                
                console.log('dasdasdsadas')
              }
          })
  }

  getCurrentUsers = () => {
      return this.http.get(`/api/manage/users/`);
  }

  deleteUserByEmail = (email: string) => {
    console.log(email["email"]);
    this.http.delete(`/api/manage/users/${email["email"]}`).subscribe(data => console.log(data))
  }

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