import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myMult',
  standalone: true,
})
export class MyMultPipe implements PipeTransform {
  transform(value: number, param: string): number {
    const paramAsNumber: number = Number(param);
    return value * paramAsNumber;
  }
}
