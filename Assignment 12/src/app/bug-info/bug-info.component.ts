import { Component } from '@angular/core';

@Component({
  selector: 'app-bug-info',
  templateUrl: './bug-info.component.html',
  styleUrl: './bug-info.component.css'
})
export class BugInfoComponent {
  mytime: Date = new Date();

}
