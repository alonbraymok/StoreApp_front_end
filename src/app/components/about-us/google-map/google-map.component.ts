import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit {

  city = "https://www.google.com/maps?q=[]&output=embed";
  url: any;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
   this.url = this.sanitizer.bypassSecurityTrustUrl(this.city);
  }
  
  getStoreLocation(){
    return this.sanitizer.bypassSecurityTrustUrl(this.url);
  }

}
