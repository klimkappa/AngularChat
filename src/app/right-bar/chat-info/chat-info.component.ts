import { Component, OnInit, Input } from '@angular/core';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/service/user/user.service';
import { RoomService } from 'src/app/service/room/room.service';
import { Room } from 'src/app/models/chat/entity/room';
import { User } from 'src/app/models/chat/entity/user';

@Component({
  selector: 'app-chat-info',
  templateUrl: './chat-info.component.html',
  styleUrls: ['./chat-info.component.css']
})
export class ChatInfoComponent implements OnInit {

  @Input() roomId : number ;

  constructor() {
  }

  ngOnInit() {
  }

  RoomDetector(){
    alert(this.roomId);
  }

}
