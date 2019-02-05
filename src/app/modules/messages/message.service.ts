import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class MessageService {

  private dataSource = new BehaviorSubject<any>('THIS IS INITIATE');
  data = this.dataSource.asObservable();

  constructor() { }

  updatedDataSelection(data) {
    debugger
    this.dataSource.next(data);
  }
  
}