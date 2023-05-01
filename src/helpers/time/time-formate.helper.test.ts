import { formateTime } from "./time-formate.helper";

jest.mock('../constants/constants.helpers.ts', () => ({
  DAY: 86400000,
  HOUR: 3600000,
  MINUTE: 60000,
}));
describe('formatTime', () => {
  it('should format a duration of 90 minutes correctly', () => {
    expect(formateTime(3600)).toBe('00:00:00');
  });

  it('should format a duration of 2 hours, 15 minutes, and 30 seconds correctly', () => {
    expect(formateTime(300)).toBe('00:00:00');
  });

  it('should format a duration of 24 hours correctly', () => {
    expect(formateTime(86400000)).toBe('1440:24:01');
  });

  it('should format a duration of 30 seconds correctly', () => {
    expect(formateTime(30000)).toBe('01:00:00');
  });
});