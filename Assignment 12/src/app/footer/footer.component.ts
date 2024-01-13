import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  @Output() submitClicked = new EventEmitter<void>();

  onButtonClick() {
    this.submitClicked.emit();
  }
}
