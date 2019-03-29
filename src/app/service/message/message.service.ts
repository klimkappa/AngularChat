import { Injectable } from '@angular/core';
import { BasicEntityService } from '../chat/basic-entity-service';
import { Message } from 'src/app/models/chat/entity/message';
import { of, Observable, Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


const ROOM_MESG_MAP: { [id: number]: Message[] } = {
  1: { id: 1, nickname: 'User1' } as any,
  2: { id: 2, nickname: 'User2' } as any
};

@Injectable({
  providedIn: 'root'
})
export class MessageService extends BasicEntityService<Message> {

  public message = new Subject<string>();
  public sent_date = new Subject<Date>();

  now = new Date();

  options = {
    hour: '2-digit',
    minute: '2-digit',
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
    timezone: 'UTC'
  }



  messsagesStack: { [roomId: number]: Message[] };
  constructor(activatedRoute: ActivatedRoute) {
    super();
    activatedRoute.queryParams.subscribe((p) => {
      debugger;
    });
    activatedRoute.params.subscribe((p) => {
      debugger;
    });
  }

  getById(id: number): Observable<Message> {
    throw new Error("Method not implemented.");
  }
  update(entity: Message): Observable<Message> {
    throw new Error("Method not implemented.");
  }
  create(): Observable<Message> {
    throw new Error("Method not implemented.");
  }

  find(): Observable<Message[]> {
    return of([/*
      { body: 'test', now: this.now.toLocaleString("ru", this.options) },
      { body: 'test1' },
      { body: 'test2' }*/
    ] as any[]);
  }

  findByRoomId(id: number): Observable<Message[]> {
    //return of(ROOM_MESG_MAP[id]);
    return of([]);
  }

}
