import { Component } from '@angular/core';
import { user } from './user';
import { UserService } from './service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users : user[] = []
  title = 'mockInterviewCoding';
  
  constructor(private userService: UserService) { }
  
  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => {
      this.users = users.data;
      console.log(users)
      })
  }
}
