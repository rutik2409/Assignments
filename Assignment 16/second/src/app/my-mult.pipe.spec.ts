import { MyMultPipe } from './my-mult.pipe';


describe('MyMultPipe', () => {
  let pipe: MyMultPipe;

  beforeEach(() => {
    pipe = new MyMultPipe();
  });

  it('should multiply a number and a string converted to number', () => {
    const result = pipe.transform(5, '3');
    expect(result).toBe(15);
  });

  it('should handle negative numbers and strings', () => {
    const result = pipe.transform(-5, '-3');
    expect(result).toBe(15);
  });

  it('should handle non-numeric strings by returning NaN', () => {
    const result = pipe.transform(5, 'abc');
    expect(result).toBeNaN();
  });

  it('should handle multiplication by zero', () => {
    const result = pipe.transform(10, '0');
    expect(result).toBe(0);
  });
});
