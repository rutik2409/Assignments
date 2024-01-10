import { Component } from '@angular/core';
import { ArithmeticService } from '../arithmetic.service';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {
  additionResult!: number;
  subtractionResult!: number;

  constructor(private arithmeticService: ArithmeticService) {
    const num1 = 10;
    const num2 = 5;

    this.additionResult = this.arithmeticService.add(num1, num2);
    this.subtractionResult = this.arithmeticService.sub(num1, num2);
  }
}
