import {Injectable} from '@angular/core';
import {AbstractCacheService} from './cache.service';
import {User} from './user-list/user-model';

@Injectable({
  providedIn: 'root'
})
export class UsersCacheService extends AbstractCacheService<User[]> {
}
