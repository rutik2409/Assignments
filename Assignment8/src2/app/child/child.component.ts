import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  @Input() item = '';
  @Output() newItemEvent = new EventEmitter<string>();
  public SendData(value: string): void {
    console.log(value);
    this.newItemEvent.emit(value);
  }
}
