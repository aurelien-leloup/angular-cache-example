import {Injectable} from '@angular/core';
import {User} from './user-list/user-model';
import {AbstractCacheService} from './cache.service';


@Injectable({
  providedIn: 'root'
})
export class UserCacheService extends AbstractCacheService<User> {
}
