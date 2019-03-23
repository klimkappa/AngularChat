import { Injectable } from '@angular/core';
import { BasicEntityService } from '../chat/basic-entity-service';
import { Message } from 'src/app/models/chat/entity/message';
import { of, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService extends BasicEntityService<Message> {

  public message = new Subject<string>();


  messsagesStack: { [roomId: number]: Message[] };
  constructor() {
    super();
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
    return of([{ body: 'test' }, { body: 'test1' }, { body: 'test2' }] as any[]);
  }

  findByRoomId(id: number): Observable<Message[]> {
    return null;
  }

}
