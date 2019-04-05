import { Injectable } from '@angular/core';
import { BasicEntityService } from '../chat/basic-entity-service';
import { Message } from 'src/app/models/chat/entity/message';
import { of, Observable, Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


const ROOM_MESG_MAP: { [id: number]: Message[] } = {
  1: [new Message('Test 1'), new Message('Test 2')],
  2: [new Message('Test 3'), new Message('Test 4'), new Message('Test 5')],
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
      
    });
    activatedRoute.params.subscribe((p) => {
      
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
    return of();
  }

  findByRoomId(id: number): Observable<Message[]> {
    return of(ROOM_MESG_MAP[id]);
  }
  
  addToRoom(roomId: number, msg: Message){
    ROOM_MESG_MAP[roomId].push(msg);
  }

}
