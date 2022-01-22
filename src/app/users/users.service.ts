import {HttpClient} from '@angular/common/http';
import {UsersCacheService} from './users-cache.service';
import {UserCacheService} from './user-cache.service';
import {Observable} from 'rxjs';
import {User} from './user-list/user-model';
import {map, shareReplay, tap} from 'rxjs/operators';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  readonly endpoint = 'https://reqres.in/api/users';

  constructor(private http: HttpClient,
              private usersCacheService: UsersCacheService,
              private userCacheService: UserCacheService) {
  }

  getUsers(): Observable<User[]> {
    let users$ = this.usersCacheService.getValue();

    if (!users$) {
      users$ = this.http.get(this.endpoint).pipe(
        tap(console.log),
        map((response: any) => response.data),
        shareReplay(1)
      );
      this.usersCacheService.setValue(users$);
    }
    return users$;
  }

  getUser(id: number): Observable<User> {
    let user$ = this.userCacheService.getValue(id);

    if (!user$) {
      user$ = this.http.get(this.endpoint + '/' + id).pipe(
        map((response: any) => response.data),
        shareReplay(1)
      );
      this.userCacheService.setValue(user$, id);
    }
    return user$;
  }

}
