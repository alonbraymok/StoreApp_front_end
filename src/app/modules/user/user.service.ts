import {User} from './user.model'
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable()

export class UserService {
    private users: User[];
    

    constructor(private http: HttpClient) { 
     }

}