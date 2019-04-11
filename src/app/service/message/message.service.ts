import { Injectable } from '@angular/core';
import { BasicEntityService } from '../chat/basic-entity-service';
import { Message } from 'src/app/models/chat/entity/message';
import { of, Observable, Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


const ROOM_MESG_MAP: { [id: number]: Message[] } = {
  0: [
  { body: 'Choose any chat to start yor dialog', author_id: 1, id: 0,},],
  1: [
  { body: 'Hello', author_id: 1, id: 0, create_at: new Date() },
  { body: 'Hi', author_id: 0, id: 0 },
  { body: 'We got a trouble', author_id: 1, id: 0 }],
  2: [
  { body: 'Quickly come to the meeting room 1B, we have a big server issue', author_id: 2, id: 2 },
  { body: 'I’m having breakfast right now, can’t you wait for 10 minutes?', author_id: 0, id: 0 },
  { body: 'We are losing money! Quick!', author_id: 2, id: 2 },
  { body: 'You are the worst!', author_id: 2, id: 2 },
  { body: 'I’m having breakfast right now, can’t you wait for 10 minutes?', author_id: 0, id: 0 },
  { body: 'We are losing money! Quick!', author_id: 2, id: 2 },
  { body: 'You are the worst!', author_id: 2, id: 2 },
  { body: 'I’m having breakfast right now, can’t you wait for 10 minutes?', author_id: 0, id: 0 },
  { body: 'We are losing money! Quick!', author_id: 2, id: 2 },
  { body: 'You are the worst!', author_id: 2, id: 2 }],
  3: [
  { body: 'Hii', author_id: 3, id: 3 }, 
  { body: 'Hi', author_id: 0, id: 0 }, 
  { body: 'Hi', author_id: 2, id: 2 }, 
  { body: 'Hi', author_id: 20, id: 2 }],
  4: [
  { body: 'Hiy', author_id: 2, id: 2 }, 
  { body: 'Hsssi', author_id: 2, id: 2 }, 
  { body: 'Hi', author_id: 2, id: 2 }, 
  { body: 'Hi', author_id: 20, id: 2 }],
  5: [
  { body: 'Hia', author_id: 2, id: 2 }, 
  { body: 'Hi', author_id: 2, id: 2 }, 
  { body: 'Hi', author_id: 2, id: 2 }, 
  { body: 'Hi', author_id: 20, id: 2 }],
  6: [
  { body: 'Hia', author_id: 2, id: 2 }, 
  { body: 'Hi', author_id: 2, id: 2 }, 
  { body: 'Hi', author_id: 2, id: 2 }, 
  { body: 'Hi', author_id: 20, id: 2 }],
  7: [
  { body: 'Hia', author_id: 2, id: 2 }, 
  { body: 'Hi', author_id: 2, id: 2 }, 
  { body: 'Hi', author_id: 2, id: 2 }, 
  { body: 'Hi', author_id: 20, id: 2 }],
  8: [
  { body: 'Hia', author_id: 2, id: 2 }, 
  { body: 'Hi', author_id: 2, id: 2 }, 
  { body: 'Hi', author_id: 2, id: 2 }, 
  { body: 'Hi', author_id: 20, id: 2 }],
  9: [
  { body: 'Hia', author_id: 2, id: 2 }, 
  { body: 'Hi', author_id: 2, id: 2 }, 
  { body: 'Hi', author_id: 2, id: 2 }, 
  { body: 'Hi', author_id: 20, id: 2 }],
  10: [
  { body: 'Hia', author_id: 2, id: 2 }, 
  { body: 'Hi', author_id: 2, id: 2 }, 
  { body: 'Hi', author_id: 2, id: 2 }, 
  { body: 'Hi', author_id: 20, id: 2 }],
  11: [
  { body: 'Hia', author_id: 2, id: 2 }, 
  { body: 'Hi', author_id: 2, id: 2 }, 
  { body: 'Hi', author_id: 2, id: 2 }, 
  { body: 'Hi', author_id: 20, id: 2 }]
 
};

@Injectable({
  providedIn: 'root'
})
export class MessageService extends BasicEntityService<Message> {



  public message = new Subject<string>();

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

  addToRoom(roomId: number, msg: Message) {
    ROOM_MESG_MAP[roomId].push(msg);
  }

}
