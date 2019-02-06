import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'addLocation'
})
export class AddLocationPipe implements PipeTransform {
  url = "https://www.google.com/maps?q=[Tel aviv]&output=embed";
  constructor(private sanitizer: DomSanitizer) {}
  transform(path: any): any {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
   }

}
