import { Component, OnInit, ViewChild } from '@angular/core';
import { Contact } from 'src/app/models/chat/entity/contact';
import { CONTACTS } from 'src/app/models/chat/entity/mock-contacts';
import { RoomService } from 'src/app/service/room/room.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { MatSidenav } from '@angular/material/sidenav';
import { ContactService } from 'src/app/service/contact/contact.service';

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


  


  @ViewChild('sidenav') sidenav: MatSidenav;


  close(reason: string) {
    this.sidenav.close();
  }
  
  contacts$: Observable<Contact[]>;
  private searchTerms = new Subject<string>();

  search(term: string): void {
    this.searchTerms.next(term);
  }


  public onSelect(contact: Contact): void {
    this.selectedContact = contact;
  }
  constructor(private router: Router, private contactService: ContactService) {
    this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe((r: NavigationEnd) => {
      console.log(router.routerState.root.firstChild.paramMap['roomId']);
    });
  }

  ngOnInit() {
    

    this.contacts$ = this.searchTerms.pipe(

      debounceTime(150),

      distinctUntilChanged(),

      switchMap((term: string) => this.contactService.searchContacts(term)),
    );
  }
  

}
