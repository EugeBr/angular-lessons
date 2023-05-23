import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  name: string;
  lastName: string;
  message: string;

  constructor() {
    this.name = "John";
    this.lastName = "Doe";
    this.message = "Enter your name";
  }
}

