import { Injectable } from '@angular/core';
import { of, Observable, Subject } from 'rxjs';
import { BasicEntityService } from '../chat/basic-entity-service';
import { Room } from 'src/app/models/chat/entity/room';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';

const ROOM_MAP: { [id: number]: Room } = {
  0: {
    id: 0, author_id: 0, icon: '',
    name: 'Room 0'

  },
  1: {
    id: 1, author_id: 1, icon: 'https://d3ctd91c7nw0ql.cloudfront.net/damfiles/box_list_img/emea/press/2019/mark-humrichouser-vice-president-global-sales/teaser_image_humrichouser_1140x820.jpg-d5efda62a89ecdae32407e4f91a21534.jpg',
    name: 'Room 1'
  },
  2: {
    id: 2, author_id: 2, icon: 'https://amp.businessinsider.com/images/5a8d77a5391d941d008b461a-750-563.jpg',
    name: 'Room 2'
  },
  3: {
    id: 3, author_id: 3, icon: 'https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2018/09/340/340/headshot.jpg?ve=1&tl=1',
    name: 'Room 3'
  },
  4: {
    id: 4, author_id: 4, icon: 'http://www.emiss.cz/wp-content/uploads/2015/04/845249-bigthumbnail.jpg',
    name: 'Room 4'
  },
  5: {
    id: 5, author_id: 5, icon: 'http://navarroclinica.com/wp-content/uploads/2017/12/teresa-foto.jpg',
    name: 'Room 5'
  },
  6: {
    id: 6, author_id: 6, icon: 'https://www.thederminstitute.com/wp-content/uploads/2016/09/smiling-happy-confident-man.jpg',
    name: 'Room 6'
  },
  7: {
    id: 7, author_id: 7, icon: 'https://purepng.com/public/uploads/large/purepng.com-man-face-herofaceshumansfrontalhuman-identityman-1421526885661w7dlt.png',
    name: 'Room 7'
  },
  8: {
    id: 8, author_id: 8, icon: 'https://www.bdo.co.il/getmedia/1578d3c7-a8e5-4453-8b88-23ab5d6091c0/ido-Meinrath_us.jpg.aspx?width=362&height=259&ext=.jpg',
    name: 'Room 8'
  },
  9: {
    id: 9, author_id: 9, icon: 'https://4.bp.blogspot.com/-Mhih06rm0YM/WQJT5OVUjiI/AAAAAAAAB2E/rvLt4_3C-CstGVTINrPFmmNALqLW_BCbQCLcB/s1600/unnamed.jpg',
    name: 'Room 9'
  },
  10: {
    id: 10, author_id: 10, icon: 'https://hairstylesweekly.com/images/2012/12/Short-Japanese-Haircut-for-Office-Ladies.jpg',
    name: 'Room 10'
  },
  11: {
    id: 11, author_id: 11, icon: 'https://sknews.gr/images/stories/ellada/woman-working-at-office.jpg',
    name: 'Room 1'
  },
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
