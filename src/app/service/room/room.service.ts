import { Injectable } from '@angular/core';
import { of, Observable, Subject } from 'rxjs';
import { BasicEntityService } from '../chat/basic-entity-service';
import { Room } from 'src/app/models/chat/entity/room';

const ROOM_MAP: { [id: number]: Room } = {
  1: { id: 1, nickname: 'User1' } as any,
  2: { id: 2, nickname: 'User2' } as any
};


@Injectable({
  providedIn: 'root'
})
export class RoomService extends BasicEntityService<Room> {

  public room = new Subject<string>();
  getById(id: number): Observable<Room> {
    return of(new Room());
  }
  update(entity: Room): Observable<Room> {
    throw new Error("Method not implemented.");
  }
  find(): Observable<Room[]> {
    throw new Error("Method not implemented.");
  }
  create(entity: Room): Observable<Room> {
    throw new Error("Method not implemented.");
  }

  constructor() {
    super();
  }

}
