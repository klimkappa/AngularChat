import { Injectable } from '@angular/core';
import { of, Observable, Subject } from 'rxjs';
import { BasicEntityService } from '../chat/basic-entity-service';
import { Room } from 'src/app/models/chat/entity/room';

@Injectable({
  providedIn: 'root'
})
export class RoomService extends BasicEntityService<Room> {

  public room = new Subject<string>();
  getById(id: number): Observable<Room> {
    throw new Error("Method not implemented.");
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
