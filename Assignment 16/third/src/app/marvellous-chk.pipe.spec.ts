import { MarvellousChkPipe } from './marvellous-chk.pipe';

describe('MarvellousChkPipe', () => {
  let pipe: MarvellousChkPipe;

  beforeEach(() => {
    pipe = new MarvellousChkPipe();
  });

  it('should check if a number is prime', () => {
    expect(pipe.transform(5, 'Prime')).toBe('It is Prime');
    expect(pipe.transform(4, 'Prime')).toBe('It is Not Prime');
  });

  it('should check if a number is perfect', () => {
    expect(pipe.transform(28, 'Perfect')).toBe('It is Perfect');
    expect(pipe.transform(6, 'Perfect')).toBe('It is Not Perfect');
  });

  it('should check if a number is even', () => {
    expect(pipe.transform(4, 'Even')).toBe('It is Even');
    expect(pipe.transform(3, 'Even')).toBe('It is Not Even');
  });

  it('should check if a number is odd', () => {
    expect(pipe.transform(3, 'Odd')).toBe('It is Odd');
    expect(pipe.transform(4, 'Odd')).toBe('It is Not Odd');
  });

  it('should handle invalid parameter', () => {
    expect(pipe.transform(5, 'Invalid')).toBe('Invalid parameter');
  });
});
