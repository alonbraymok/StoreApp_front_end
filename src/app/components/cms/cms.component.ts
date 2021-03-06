import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/modules/user/users.service';

@Component({
  selector: 'app-cms',
  templateUrl: './cms.component.html',
  styleUrls: ['./cms.component.css']
})
export class CmsComponent implements OnInit {

  constructor(private _userService: UsersService) { }

  char: string;
  result: string = ""

  ngOnInit() {
    
  }
  statisticSearch(){
    debugger
    this._userService.getCharStatic(this.char).subscribe((data) =>{
      debugger
      console.log(data['msg']);
      this.result ="The letter: "+this.char+" found "+ data['msg'] + " times";
      this.char = "";
    });
  }

}
