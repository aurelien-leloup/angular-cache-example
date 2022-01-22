import {Component, OnInit} from '@angular/core';
import {User} from '../user-list/user-model';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {UsersService} from '../users.service';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user$: Observable<User>;

  constructor(private route: ActivatedRoute, private usersService: UsersService) {
  }

  ngOnInit(): void {
    this.user$ = this.route.paramMap.pipe(
      switchMap( params => this.usersService.getUser(+params.get('id')))
    );
  }

}
