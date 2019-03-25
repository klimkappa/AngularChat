import { BasicEntity } from './basic-entity';

export class User extends BasicEntity {
    email?: string;
    nickname?: string;
    first_name?: string;
    last_name?: string;
    avatar?: string;
    birth?: Date;
    create_at?: Date;
    update_at?: Date;
}
