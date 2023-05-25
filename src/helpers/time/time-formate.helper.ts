import { HOUR, MINUTE } from '../constants/constants.helpers';

export const formateTime = (seconds: number): string => {
  const hours = Math.floor(seconds / HOUR);
  const minutes = Math.floor((seconds % HOUR) / MINUTE);
  const remainingSeconds = seconds % MINUTE;

  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
};
