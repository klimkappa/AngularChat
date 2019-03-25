import { BasicEntity } from './basic-entity';

export class Message extends BasicEntity {
    body: string;
    author_id?: number;

    attachments?: Object[];

    create_at?: Date;
    update_at?: Date;

     now ?: Date;
     options? = {};
      

    constructor(body: string) {
        super();
        this.body = body;
    }
}
