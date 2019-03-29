import { Component, OnInit } from '@angular/core';
import { CONTACTS } from 'src/app/models/chat/entity/mock-contacts';
import { Contact } from 'src/app/models/chat/entity/contact';
import { ActivatedRoute, Params, Router, NavigationEnd } from '@angular/router';
import { RoomService } from 'src/app/service/room/room.service'
import { Room } from 'src/app/models/chat/entity/room'
import { filter } from 'rxjs/operators'
import { ContactService } from 'src/app/service/contact/contact.service';


@Component({
  selector: 'app-left-bar-contacts',
  templateUrl: './left-bar-contacts.component.html',
  styleUrls: ['./left-bar-contacts.component.css']
})
export class LeftBarContactsComponent implements OnInit {

  public contacts: Contact[] = CONTACTS;

  constructor(private router: Router, private contactService: ContactService) {
    this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe((r: NavigationEnd) => {
      console.log(router.routerState.root.firstChild.paramMap['roomId']);
    });
  }

  ngOnInit() {
    this.getContacts();
  }

  getContacts(): void {
    this.contactService.getContacts()
      .subscribe(contacts => this.contacts = contacts);
  }

  add(full_name: string): void {
    full_name = full_name.trim();
    if (!full_name) { return; }
    this.contactService.addContact({ full_name } as Contact)
      .subscribe(contact => {
        this.contacts.push(contact);
      });
  }

  delete(contact: Contact): void {
    this.contacts = this.contacts.filter(c => c !== contact);
    this.contactService.deleteContact(contact).subscribe();
  }


}
