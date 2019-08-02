import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Tasks';
  upperCaseText = "Texto em maiusculo";
  lowerCaseText = "Texto em minusculo";
  percentValue: number = 0.5;
  date: Date = new Date();
  money: number = 598;
  isAdmin: boolean = true;
  profile: number = 1;

  user: User = {
    name: 'Gabriel',
    age: 23
  }

}
