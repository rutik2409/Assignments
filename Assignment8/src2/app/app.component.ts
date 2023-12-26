import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  currentItem = 'Television';

  public messageChild!: string;
  receivedMessage(message: string) {
    console.log('message', message);
    this.messageChild = message;
  }
  sendChild(value: string): void {
    this.currentItem = value;
  }
}
