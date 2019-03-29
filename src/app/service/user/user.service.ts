import { Injectable } from '@angular/core';
import { of, Observable, Subject } from 'rxjs';

import { BasicEntityService } from '../chat/basic-entity-service';
import { User } from 'src/app/models/chat/entity/user';

const USER_MAP: { [id: number]: User } = {
  1: { id: 1, nickname: 'User1' },
  2: { id: 2, nickname: 'User2' }
};

@Injectable({
  providedIn: 'root'
})
export class UserService extends BasicEntityService<User> {
  getById(id: number): Observable<User> {
    return of(USER_MAP[id]);
  }
  update(entity: User): Observable<User> {
    throw new Error("Method not implemented.");
  }
  find(): Observable<User[]> {
    throw new Error("Method not implemented.");
  }
  create(entity: User): Observable<User> {
    throw new Error("Method not implemented.");
  }

  constructor() {
    super();
  }

}
