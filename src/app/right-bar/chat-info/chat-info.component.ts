import { Component, OnInit, Input, TemplateRef } from '@angular/core';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/service/user/user.service';
import { RoomService } from 'src/app/service/room/room.service';
import { Room } from 'src/app/models/chat/entity/room';
import { User } from 'src/app/models/chat/entity/user';
import { Contact } from 'src/app/models/chat/entity/contact';
import { CONTACTS } from 'src/app/models/chat/entity/mock-contacts';

@Component({
  selector: 'app-chat-info',
  templateUrl: './chat-info.component.html',
  styleUrls: ['./chat-info.component.css']
})
export class ChatInfoComponent implements OnInit {

  @Input()
  public room: Room;

  private roomService: RoomService;
  


  constructor(roomService: RoomService) {
    this.room = new Room();
    this.roomService = roomService;
  }

  ngOnInit() {
    if(this.room == undefined){
      this.room = new Room();
    }
  }


  RoomDetector() {

  }

  
  changeNotifications(){}

}