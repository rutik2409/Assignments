import { Component } from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css'
})
export class Child1Component {
  result!: string;

  constructor(private numberService: NumberService) {
    const numberToCheck = 7;
    this.result = this.numberService.ChkPrime(numberToCheck)
      ? 'Prime'
      : 'Not Prime';
  }
}
