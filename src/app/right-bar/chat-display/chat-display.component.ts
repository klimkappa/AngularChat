import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/service/message/message.service';
import { Message } from 'src/app/models/chat/entity/message';


@Component({
  selector: 'app-chat-display',
  templateUrl: './chat-display.component.html',
  styleUrls: ['./chat-display.component.css']
})
export class ChatDisplayComponent implements OnInit {

  messages: Message[];

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.messageService.find().subscribe(msgs => this.messages = msgs);
    
  }

}
