import { each, forEach, forIn, isArray, map } from 'lodash';
import { UnCapitalizeObjectKeys } from '../generics';
import { daysTimeStringFromSeconds } from './private';

/**
 * verifies object is null or undefined, if 'yes' return true.
 * @param value type any
 * @returns boolean
 */
export const isNullOrUndefined = (value: any): boolean => {
  return value === null || value === undefined;
};

/**
 *
 * @param value
 * @returns
 */
export const isDate = (value: any): boolean => {
  try {
    return !isNaN(new Date(value).getTime());
  } catch (e) {
    return false;
  }
};

/**
 *
 * @param value
 * @returns
 */
export const isObject = (value: any): boolean => {
  return !isNullOrUndefined(value) ? typeof value === 'object' : false;
};

/**
 * Add leading '0' to the either to month or day
 * @param value type number
 * @returns number or string
 */
export const leadZeroForMonthOrDay = (value: number): number | string => {
  return value < 10 ? `0${value}` : value;
};

/**
 *
 * @param value
 * @returns
 */
export const objectNonShadowCopy = (value: any): any => {
  return JSON.parse(JSON.stringify(value));
};

/**
 *
 * @param value
 * @returns
 */
export const remainingDaysHoursFormTwoDates = (
  startDate: Date,
  finish: Date
): {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
} | null => {
  try {
    if (finish.getTime() > startDate.getTime()) {
      return daysTimeStringFromSeconds(
        (finish.getTime() - startDate.getTime()) / 1000
      );
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};

/**
 *
 * @param value
 * @returns
 */
export const remainingDaysHoursFormSeconds = (
  seconds: number
): {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
} | null => {
  try {
    return daysTimeStringFromSeconds(seconds);
  } catch (error) {
    return null;
  }
};

/**
 * verifies object length equals to 0, if 'yes' return true.
 * @param value type any
 * @returns boolean
 */
export const isEmpty = (value: any): boolean => {
  // we don't check for string here so it also works with arrays
  return value == null || value.length === 0;
};

export const hasValidLength = (value: any): boolean => {
  // non-strict comparison is intentional, to check for both `null` and `undefined` values
  return value != null && typeof value.length === 'number';
};

/**
 * verifies object is null or undefined and length equals to 0, if 'yes' return true.
 * @param value type any
 * @returns boolean
 */
export const isNullOrUndefinedEmpty = (value: any): boolean => {
  return isNullOrUndefined(value) && isEmpty(value);
};

/**
 * verifies object is empty & it's props, if 'yes' return true.
 * @param value type any
 * @returns boolean
 */
export function isEmptyInDepth(value?: any): boolean {
  if (isNullOrUndefined(value)) {
    return true;
  } else {
    let keyLength = 0;
    let emptyValues = 0;
    forIn(value, (v, key) => {
      keyLength += 1;
      switch (typeof v) {
        case 'boolean':
          emptyValues += v === false ? 1 : 0;
          break;

        case 'string':
          emptyValues += v.length <= 0 ? 1 : 0;
          break;
        case 'object':
          if (isNullOrUndefined(v)) {
            emptyValues += 1;
          } else {
            emptyValues += v.length <= 0 ? 1 : 0;
          }

          break;
      }
    });
    return keyLength === emptyValues;
  }
}


