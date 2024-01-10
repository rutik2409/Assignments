import { Component } from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  isPrime: boolean;
  capitalCount: number;

  constructor(private numberService: NumberService, private stringService: StringService) {
    // Hardcoded values for demonstration
    this.isPrime = this.numberService.ChkPrime(7);
    this.capitalCount = this.stringService.countCapitalChars('Hello World');
  }
}
