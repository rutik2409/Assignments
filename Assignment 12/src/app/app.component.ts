import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private router: Router) {

  }
  parentFirstName: string = '';
  parentLastName: string = '';
  parentEmail: string = '';
  handleButtonClick() {
    console.log("submit click");
    this.router.navigate(['report']);

  }
}
