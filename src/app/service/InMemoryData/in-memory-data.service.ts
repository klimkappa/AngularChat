import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Contact } from 'src/app/models/chat/entity/contact'
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const contacts = [{
      full_name: 'Contact1',
      id: 1,
      last_chat: 'Message1 Message1 Message1',
      profile_photo: 'https://d3ctd91c7nw0ql.cloudfront.net/damfiles/box_list_img/emea/press/2019/mark-humrichouser-vice-president-global-sales/teaser_image_humrichouser_1140x820.jpg-d5efda62a89ecdae32407e4f91a21534.jpg'
    }, {
      full_name: 'Contact2',
      id: 2,
      last_chat: 'Message2 Message2 Message2',
      profile_photo: 'https://amp.businessinsider.com/images/5a8d77a5391d941d008b461a-750-563.jpg'
    }, {
      full_name: 'Contact3',
      id: 3,
      last_chat: 'Message3 Message3 Message3',
      profile_photo: 'https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2018/09/340/340/headshot.jpg?ve=1&tl=1'
    }, {
      full_name: 'Contact4',
      id: 4,
      last_chat: 'Message4 Message4 Message4',
      profile_photo: 'http://www.emiss.cz/wp-content/uploads/2015/04/845249-bigthumbnail.jpg'
    }, {
      full_name: 'Contact5',
      id: 5,
      last_chat: 'Message5 Message5 Message5',
      profile_photo: 'http://navarroclinica.com/wp-content/uploads/2017/12/teresa-foto.jpg'
    }, {
      full_name: 'Contact6',
      id: 6,
      last_chat: 'Message6 Message6 Message6',
      profile_photo: 'https://www.thederminstitute.com/wp-content/uploads/2016/09/smiling-happy-confident-man.jpg'
    }];
    return { contacts };
  }

  genId(contacts: Contact[]): number {
    return contacts.length > 0 ? Math.max(...contacts.map(contact => contact.id)) + 1 : 1;
  }

}