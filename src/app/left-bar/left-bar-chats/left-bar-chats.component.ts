import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { Contact } from 'src/app/models/chat/entity/contact';
import { CONTACTS } from 'src/app/models/chat/entity/mock-contacts';
import { RoomService } from 'src/app/service/room/room.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { MatSidenav } from '@angular/material/sidenav';
import { ContactService } from 'src/app/service/contact/contact.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { DialogData } from '../user-info/user-info.component';

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
  constructor(private router: Router,public dialog: MatDialog, private contactService: ContactService) {
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
  
  openDialog(): void {
    const dialogRef = this.dialog.open(MenuContactsDialog, {
      data: {},
      width: '350px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}


@Component({
  selector: 'menu-contacts-dialog',
  templateUrl: 'menu-contacts-dialog.html',
  styleUrls: ['./menu-contacts-dialog.css']
})
export class MenuContactsDialog {

  
  public contacts: Contact[] = CONTACTS;

  constructor(
    public dialogRef: MatDialogRef<MenuContactsDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
