import { Component, OnInit } from '@angular/core';
import { WebSocketService } from 'src/app/modules/webSocket/web-socket.service';
import { ChatService } from 'src/app/modules/webSocket/chat.service';


@Component({
  selector: 'app-real-time-message',
  templateUrl: './real-time-message.component.html',
  styleUrls: ['./real-time-message.component.css'],
  providers: [ WebSocketService, ChatService ]
})
export class RealTimeMessageComponent implements OnInit {

	constructor(private chatService: ChatService) {
		chatService.messages.subscribe(msg => {	debugger		
      console.log("Response from websocket: " + msg["message"] + " by: " + msg["author"]);
		});
	}
  myAuthor: string;
  myMessage: string;

  private message = {
		author: '',
		message: ''
	}

  sendMsg() {
    console.log('new message from client to websocket: ');
    this.message.author = this.myAuthor;
    this.message.message = this.myMessage;
    debugger
		this.chatService.messages.next(this.message);
    this.message.message = '';
    this.myAuthor = '';
    this.myMessage = '';
  }
  ngOnInit(){

  }

}