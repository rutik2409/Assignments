import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputString: string = '';
  password: string = '';
  numberArray: string = '';


  countCapital(input: string): number {
    return (input.match(/[A-Z]/g) || []).length;
  }

  checkSpecialSym(password: string): boolean {
    const capitalCount = this.countCapital(password);
    const smallCount = password.length - capitalCount;
    return capitalCount >= 2 && smallCount >= 3;
  }

  arrayAddition(numbers: number[]): number {
    return numbers.reduce((sum, num) => sum + num, 0);
  }
}
