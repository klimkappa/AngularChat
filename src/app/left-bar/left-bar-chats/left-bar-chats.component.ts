import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/chat/entity/contact';
import { CONTACTS } from 'src/app/models/chat/entity/mock-contacts';
import { RoomService } from 'src/app/service/room/room.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-left-bar-chats',
  templateUrl: './left-bar-chats.component.html',
  styleUrls: ['./left-bar-chats.component.css']
})
export class LeftBarChatsComponent implements OnInit {

  selectedContact: Contact = new Contact();


  public contacts: Contact[] = CONTACTS;
  activeRouteParam$: any;

  roomService: RoomService;


  public onSelect(contact: Contact): void {
    this.selectedContact = contact;
  }
  constructor(private router: Router) {
    this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe((r: NavigationEnd) => {
      console.log(router.routerState.root.firstChild.paramMap['roomId']);
    });
  }

  ngOnInit() {
  }
  

}
