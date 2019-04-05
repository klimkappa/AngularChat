import { BasicEntity } from './basic-entity';

export class Room extends BasicEntity {
    author_name?: string;
    author_id: number;
    icon: string;
    attachments?: Object[];
    create_at?: Date;
    update_at?: Date;
    name: string;
}
