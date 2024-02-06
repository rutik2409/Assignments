import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk',
  standalone: true,
})
export class MarvellousChkPipe implements PipeTransform {
  transform(value: number, param: string): string {
    let result: string = '';

    if (param === 'Prime') {
      if (this.isPrime(value)) {
        result = 'It is Prime';
      } else {
        result = 'It is Not Prime';
      }
    } else if (param === 'Perfect') {
      if (this.isPerfect(value)) {
        result = 'It is  Perfect';
      } else {
        result = ' It is Not Perfect';
      }
    } else if (param === 'Even') {
      if (this.isEven(value)) {
        result = 'It is  Even';
      } else {
        result = 'It is  Not Even';
      }
    } else if (param === 'Odd') {
      if (this.isOdd(value)) {
        result = 'It is  Odd';
      } else {
        result = 'It is Not Odd';
      }
    } else {
      result = 'Invalid parameter';
    }

    return result;
  }
  private isEven(num: number): boolean {
    return num % 2 === 0;
  }

  private isOdd(num: number): boolean {
    return num % 2 !== 0;
  }
  private isPrime(num: number): boolean {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  private isPerfect(num: number): boolean {
    if (num <= 1) {
      return false;
    }
    let sum = 1;
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) {
        sum += i;
        if (i !== num / i) {
          sum += num / i;
        }
      }
    }
    return sum === num;
  }
}
