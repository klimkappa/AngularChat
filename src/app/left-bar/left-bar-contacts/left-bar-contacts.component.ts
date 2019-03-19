import { Component, OnInit } from '@angular/core';
import { CONTACTS } from 'src/app/models/chat/entity/mock-contacts';
import { Contact } from 'src/app/models/chat/entity/contact';



@Component({
  selector: 'app-left-bar-contacts',
  templateUrl: './left-bar-contacts.component.html',
  styleUrls: ['./left-bar-contacts.component.css']
})
export class LeftBarContactsComponent implements OnInit {

  selectedContact: Contact;

  public contacts: Contact[] = CONTACTS;

  
  public onSelect(contact: Contact): void {
  this.selectedContact = contact;
  }
  constructor() { }

  ngOnInit() {
  }


}
