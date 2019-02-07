import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/modules/user/users.service'
import { User, UserWithId } from 'src/app/modules/user/user.model'
import { DataService} from 'src/app/modules/data.service'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [UsersService,DataService]
})
export class UserListComponent implements OnInit {

  users: any[];
  user: any;
  clickButton: string ='Click here';
  search: string;
  constructor(private _usersService: UsersService, private dataService: DataService) { }
  email: string;
  minVal: Number;
  maxVal: Number;
  nameLike: String;

  ngOnInit() {
    this.getCurrentUsers();
    this.dataService.currentMessage.subscribe(data => { debugger
      console.log(data)
      if(data=="ok"){
        this.getCurrentUsers();
      }
    } )
  }
  getUserWithParam(){
    if(this.clickButton == 'Click here'){
      //this.users = this._usersService.getUserWithParams();
      this.clickButton = 'Back';
      
    }else{
      this._usersService.updateCurrentUsers();
      //this.users = this._usersService.getCurrentUsers();
      this.clickButton = 'Click here';
    }
  }

  handleSearch() {
    const users = this._usersService.findWithQuery(this.minVal, this.maxVal, this.nameLike).subscribe(
      result => {
        this.users = result['msg']
      }
    )
  }

  getCurrentUsers(){
    this._usersService.getCurrentUsers().subscribe(data => { debugger
      this.users = data['msg']});
  }

  editUserInfo(username: string, email: string, password: string, address: string, id: string){
    console.log(username);
    this.user = new UserWithId(id,email,password,username,address);
    
    this.dataService.changeMessage(this.user);
    
  }

  deleteUser(email: string){
    this._usersService.deleteUserByEmail(email);
    this.getCurrentUsers();

  }
  getUserByUsername(){
    this._usersService.getUserByUsername(this.search).subscribe(data =>{ this.users = data['msg']});
  }
}
