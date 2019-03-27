import { Component, OnInit, Input } from '@angular/core';
import { MessageService } from 'src/app/service/message/message.service';
import { Message } from 'src/app/models/chat/entity/message';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-chat-display',
  templateUrl: './chat-display.component.html',
  styleUrls: ['./chat-display.component.css']
})
export class ChatDisplayComponent implements OnInit {

  messages: Message[];

  constructor(private messageService: MessageService, 
    private activatedRoute: ActivatedRoute) {
    //this.activatedRoute.params.subscribe(params => {
      //let roomId = params['roomId'];
     // this.messageService.findByRoomId(roomId).subscribe(msgs => this.messages = msgs);})
  }

  ngOnInit() {
    this.messageService.find().subscribe(msgs => this.messages = msgs);
    this.messageService.message.subscribe(message => this.messages.push(new Message(message)));
  }
  
 
  @Input() roomId : number;  
  
  RoomDetector(){
    alert(this.roomId);
  }
}
