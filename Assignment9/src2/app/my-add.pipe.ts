import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myAdd',
  standalone: true,
})
export class MyAddPipe implements PipeTransform {
  transform(value: number, param: string): number {
    const paramAsNumber: number = Number(param);
    return value + paramAsNumber;
  }
}
