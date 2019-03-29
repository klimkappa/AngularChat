import { Component, OnInit, Input } from '@angular/core';
import { MessageService } from 'src/app/service/message/message.service';
import { Message } from 'src/app/models/chat/entity/message';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent implements OnInit {

  body: string;
  now = new Date();
  

  constructor(private messageService: MessageService) { }


  ngOnInit() {

  }


  sendMessage(message) {
    if(message || null || false || 0){
    this.messageService.message.next(message);
  }
    else {
      alert( 'Невозможно отправить пустое сообщение' );
      
    }
  }

  @Input() roomId : number;  
  
 

}
