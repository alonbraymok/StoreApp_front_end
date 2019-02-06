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
  result: string = "sds"

  ngOnInit() {
    
  }
  statisticSearch(){
    this._userService.getCharStatic(this.char).subscribe((data) =>{
      console.log(data['msg']);
      this.result = data['msg'];
      this.char = "";
    });
  }

}
