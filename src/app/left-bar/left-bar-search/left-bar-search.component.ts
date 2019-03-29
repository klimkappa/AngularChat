import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/service/contact/contact.service';
import { Observable, Subject } from 'rxjs';
import { Contact } from 'src/app/models/chat/entity/contact';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-left-bar-search',
  templateUrl: './left-bar-search.component.html',
  styleUrls: ['./left-bar-search.component.css']
})
export class LeftBarSearchComponent implements OnInit {

  contacts$: Observable<Contact[]>;
  private searchTerms = new Subject<string>();

  constructor(private contactService: ContactService) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {

    this.contacts$ = this.searchTerms.pipe(

      debounceTime(150),

      distinctUntilChanged(),

      switchMap((term: string) => this.contactService.searchContacts(term)),
    );
  }

}
