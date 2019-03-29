import { Component, OnInit } from '@angular/core';
import { CONTACTS } from 'src/app/models/chat/entity/mock-contacts';
import { Contact } from 'src/app/models/chat/entity/contact';
import { ActivatedRoute, Params, Router, NavigationEnd } from '@angular/router';
import { RoomService } from 'src/app/service/room/room.service'
import { Room } from 'src/app/models/chat/entity/room'
import { filter} from 'rxjs/operators'


@Component({
  selector: 'app-left-bar-contacts',
  templateUrl: './left-bar-contacts.component.html',
  styleUrls: ['./left-bar-contacts.component.css']
})
export class LeftBarContactsComponent implements OnInit {

  selectedContact: Contact = new Contact();

  public contacts: Contact[] = CONTACTS;

  //result = CONTACTS.filter(elem => elem[this.roomId])


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
  selectContact(selectedContact) {

  }
  

}
