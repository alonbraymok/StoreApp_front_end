import {User} from './user.model'
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable()

export class UserService {
    private users: User[];
    

    constructor(private http: HttpClient) { 
     }

    updateCurrentUsers = () => {
        this.http.get(`/api/users/allUsers`).subscribe(
            data => {
                if (data['ok']) {
                    this.users = data['msg'];
                } else {
                }
            })
    }

    getCurrentUsers = () => {
        return this.users;
    }

    getSingelUser (user: User): User {
        this.users.forEach( function( dbUser ) {
            if(user.email == dbUser.email){
                return dbUser;
            }else{
                return null;
            }
        });
        return null;
    }

    addNewUser = (user: User) => {
        console.log('need to add this user to db');

        this.http.post(`/api/users/addUser`, user ).subscribe(
            data => {
                if (data['ok']) {
                    console.log('user add seccessfuly');
                } else {
                    console.log('error while adding a new userss..');
                }
            });
            this.updateCurrentUsers();
    }
    deleteSingilUser = (user: User) => {
        this.http.delete(`/api/users/${user.email}` ).subscribe(
            data => {
                if (data['ok']) {
                    console.log('user delete seccessfuly');
                } else {
                    console.log('error while deleting a new user..');
                }
            });
            this.updateCurrentUsers();
    }

    getUserWithParams(): User[]{
        //return all users that match to three params
        return null;
    }

    editUser(email: string){

    }
}