import { Observable } from 'rxjs';
import { BasicEntity } from 'src/app/models/chat/entity/basic-entity';

export abstract class BasicEntityService<T extends BasicEntity> {
    abstract getById(id: number): Observable<T>;
    abstract update(entity: T): Observable<T>;
    abstract find(): Observable<T[]>;
    abstract create(entity: T): Observable<T>;
}
