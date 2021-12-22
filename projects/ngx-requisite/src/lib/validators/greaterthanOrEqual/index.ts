import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { isNullOrUndefined } from '../../util';

/**
 * validates the abstract control value should be greater than or equal to given value
 * @param value is typeof 'number'
 * @returns ValidationErrors if logic satisfies else null
 */
export const greaterthanOrEqual = (value: number): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    return !isNullOrUndefined(control) && !isNaN(value)
      ? (control.value >= value)
        ? null
        : {
            greaterthanOrEqual: {
              greaterthanOrEqual: value,
              actual: control.value,
            },
          }
      : null;
  };
};
