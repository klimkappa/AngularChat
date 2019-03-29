import { Component, OnInit } from '@angular/core';
export interface Status {
  statusValue: string;
  statusViewValue: string;
}
@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  avaliable: Status[] = [
    {statusValue: 'online-0', statusViewValue: 'https://static.thenounproject.com/png/1144840-200.png'},
    {statusValue: 'offline-1', statusViewValue: 'https://static.thenounproject.com/png/1144840-200.png'},
    {statusValue: 'busy-2', statusViewValue: 'https://static.thenounproject.com/png/1144840-200.png'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
