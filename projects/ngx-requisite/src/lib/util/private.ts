/**
 * Calucate number of days, hours, minutes and seconds remaining for given seconds
 * @param value type 'number'
 * @returns an object consists number of days, hours, minutes and seconds remaining
 */
export const daysTimeStringFromSeconds = (
  seconds: number
): {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
} => {
  return {
    days: Math.floor(seconds / 86400),
    hours: Math.floor(seconds / 3600) % 24,
    minutes: Math.floor(seconds / 60) % 60,
    seconds: seconds % 60,
  };
};
