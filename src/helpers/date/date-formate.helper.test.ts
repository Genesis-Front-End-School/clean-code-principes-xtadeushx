import { formateDate } from "./date-formate.helper";

describe('formateDate', () => {
  test('formats a date string correctly', () => {
    const date = '2022-01-01T00:00:00Z';

    const formattedDate = formateDate(date);

    expect(formattedDate).toBe('1/1/2022');
  });

  test('returns an empty string if input is invalid', () => {
    const date = 'not a date';

    const formattedDate = formateDate(date);

    expect(formattedDate).toBe("");
  });
});