import { BasicEntity } from './basic-entity';
import { Contact } from './contact';

export class Message extends BasicEntity {
    body: string;
    author_id: number;
    author?: Contact;

    attachments?: Object[];

    create_at?: Date;
    update_at?: Date;

    now?: Date;
    options?: any;

    constructor(body: string) {
        super();
        this.body = body;
    }




}
