import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/service/message/message.service';
import { Message } from 'src/app/models/chat/entity/message';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent implements OnInit {

  body: string;

  constructor(private messageService: MessageService) { }

  


  ngOnInit() {

    }

    
    sendMessage(message){
      this.messageService.message.next(message);
  }

}
