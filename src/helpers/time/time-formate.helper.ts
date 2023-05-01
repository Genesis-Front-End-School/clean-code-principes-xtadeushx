import { DAY, HOUR, MINUTE } from '../constants/constants.helpers';

export const formateTime = (date: number) => {
  let result;

  let hours = Math.round(date / MINUTE).toString();
  let minutes = Math.round(date / HOUR).toString();
  let seconds = Math.round(date / DAY).toString();

  hours = parseInt(hours, 10) < 10 ? '0' + hours : hours;

  minutes = parseInt(minutes, 10) < 10 ? '0' + minutes : minutes;
  seconds = parseInt(seconds, 10) < 10 ? '0' + seconds : seconds;

  result = `${hours}:${minutes}:${seconds}`;
  return result;
};

