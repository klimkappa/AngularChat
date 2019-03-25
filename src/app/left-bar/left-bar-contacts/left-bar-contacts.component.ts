import { Component, OnInit } from '@angular/core';
import { CONTACTS } from 'src/app/models/chat/entity/mock-contacts';
import { Contact } from 'src/app/models/chat/entity/contact';
import { ActivatedRoute, Params } from '@angular/router';
import { RoomService } from 'src/app/service/room/room.service'
import { Room } from 'src/app/models/chat/entity/room'


@Component({
  selector: 'app-left-bar-contacts',
  templateUrl: './left-bar-contacts.component.html',
  styleUrls: ['./left-bar-contacts.component.css']
})
export class LeftBarContactsComponent implements OnInit {

  selectedContact: Contact = new Contact();


  public contacts: Contact[] = CONTACTS;
  activeRouteParam$: any;

  roomService: RoomService;


  public onSelect(contact: Contact): void {
    this.selectedContact = contact;
  }
  constructor(private activatedRoute: ActivatedRoute) {
    this.activeRouteParam$ = this.activatedRoute.paramMap.subscribe((params: Params) => {
      debugger
      this.selectedContact.id = params['id']
    })
  }

  ngOnInit() {
  }
  selectContact(selectedContact) {

  }

}
