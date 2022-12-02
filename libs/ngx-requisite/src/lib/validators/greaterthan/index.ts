import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { isNullOrUndefined } from '../../util';

/**
 * validates the abstract control value should be greater than given value
 * @param value is typeof 'number'
 * @returns ValidationErrors if logic satisfies else null
 */
export const greaterthan = (value: number): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    return !isNullOrUndefined(control) && !isNaN(value)
      ? (Number(control.value) > value)
        ? null
        : {
            greaterthan: {
              greaterthan: value,
              actual: control.value,
            },
          }
      : null;
  };
};
