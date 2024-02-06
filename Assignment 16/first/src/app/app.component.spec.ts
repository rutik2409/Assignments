import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';


describe('AppService', () => {


  it('should count the number of capital letters', () => {
    const result = service.countCapital('Hello World');
    expect(result).toBe(2);
  });

  it('should check for minimum capital and small letters in password', () => {
    expect(service.checkSpecialSym('AbCde')).toBe(true);
    expect(service.checkSpecialSym('AbC')).toBe(false);
  });

  it('should return the addition of all elements in the array', () => {
    const result = service.arrayAddition([1, 2, 3, 4, 5]);
    expect(result).toBe(15);
  });
});
