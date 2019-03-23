import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/chat/entity/contact';
import { CONTACTS } from 'src/app/models/chat/entity/mock-contacts';
import { RoomService } from 'src/app/service/room/room.service';

@Component({
  selector: 'app-left-bar-chats',
  templateUrl: './left-bar-chats.component.html',
  styleUrls: ['./left-bar-chats.component.css']
})
export class LeftBarChatsComponent implements OnInit {

  selectedContact: Contact;


  public contacts: Contact[] = CONTACTS;
  activeRouteParam$: any;

  roomService: RoomService;


  public onSelect(contact: Contact): void {
    this.selectedContact = contact;
  }
  constructor() {
  }

  ngOnInit() {
  }
  

}
