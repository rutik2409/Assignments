import { MyAddPipe } from './my-add.pipe';

describe('MyAddPipe', () => {
  let pipe: MyAddPipe;

  beforeEach(() => {
    pipe = new MyAddPipe();
  });

  it('should add a number and a string converted to number', () => {
    const result = pipe.transform(5, '3');
    expect(result).toBe(8);
  });

  it('should handle negative numbers and strings', () => {
    const result = pipe.transform(-5, '-3');
    expect(result).toBe(-8);
  });

  it('should handle non-numeric strings by returning NaN', () => {
    const result = pipe.transform(5, 'abc');
    expect(result).toBeNaN();
  });
});
