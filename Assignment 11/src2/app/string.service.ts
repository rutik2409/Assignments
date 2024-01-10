import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  constructor() { }
  countCapitalChars(inputString: string): number {
    let count = 0;
    for (let i = 0; i < inputString.length; i++) {
      if (inputString[i] !== ' ' && inputString[i].toUpperCase() === inputString[i]) {
        count++;
      }
    }
    return count;
  }
}
