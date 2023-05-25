import { formateTime } from "./time-formate.helper";

describe('formatTime', () => {
  it('formats 0 seconds as 00:00:00', () => {
    expect(formateTime(0)).toBe('00:00:00');
  });

  it('formats 1 second as 00:00:01', () => {
    expect(formateTime(1)).toBe('00:00:01');
  });

  it('formats 59 seconds as 00:00:59', () => {
    expect(formateTime(59)).toBe('00:00:59');
  });

  it('formats 60 seconds as 00:01:00', () => {
    expect(formateTime(60)).toBe('00:01:00');
  });

  it('formats 3600 seconds as 01:00:00', () => {
    expect(formateTime(3600)).toBe('01:00:00');
  });

  it('formats 3661 seconds as 01:01:01', () => {
    expect(formateTime(3661)).toBe('01:01:01');
  });

  it('formats 86399 seconds as 23:59:59', () => {
    expect(formateTime(86399)).toBe('23:59:59');
  });
});
