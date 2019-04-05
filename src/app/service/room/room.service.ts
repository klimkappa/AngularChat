import { Injectable } from '@angular/core';
import { of, Observable, Subject } from 'rxjs';
import { BasicEntityService } from '../chat/basic-entity-service';
import { Room } from 'src/app/models/chat/entity/room';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';

const ROOM_MAP: { [id: number]: Room } = {
  1: { id: 1, author_id: 1, icon: 'http://navarroclinica.com/wp-content/uploads/2017/12/teresa-foto.jpg', name: 'Room 1' },
  2: { id: 2, author_id: 1, icon: 'http://navarroclinica.com/wp-content/uploads/2017/12/teresa-foto.jpg', name: 'Room 2' },
};

@Injectable({
  providedIn: 'root'
})
export class RoomService extends BasicEntityService<Room> {

  public room = new Subject<string>();
  getById(id: number): Observable<Room> {
    //return this.http.get<Room>('http://test/room/' + id);
    return of(ROOM_MAP[id]);
  }
  update(entity: Room): Observable<Room> {
    throw new Error("Method not implemented.");
  }
  find(): Observable<Room[]> {
    return of(Object.values(ROOM_MAP)).pipe(delay(300));
    //return this.http.get<Room>('http://test/room');
  }
  create(entity: Room): Observable<Room> {
    entity.id = Object.keys(ROOM_MAP).length + 1;
    ROOM_MAP[entity.id] = entity;
    return of(entity);
  }

  constructor(private http: HttpClient) {
    super();
  }

}
