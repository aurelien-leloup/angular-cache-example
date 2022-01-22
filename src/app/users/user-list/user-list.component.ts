import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from './user-model';
import {UsersService} from '../users.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users$: Observable<User[]>;

  constructor(private usersService: UsersService, private router: Router) {
  }

  ngOnInit(): void {
    this.users$ = this.usersService.getUsers();
  }

  seeDetails(id: number) {
    this.router.navigate(['/user/' + id]);
  }
}
