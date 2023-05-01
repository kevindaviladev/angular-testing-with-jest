import { Component, inject } from '@angular/core';
import { UserService } from './services/user.service';
import { User } from './interfaces/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-testing-with-jest';

  users: User[] = [];
  userService = inject(UserService);

  ngOnInit() {
    this.userService.getUsers().subscribe((users) => {
      console.log(users);
      this.users = users;
    });

    this.userService.getCustomUser().subscribe((user) => {
      console.log(user);
    });
  }
}
