import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { isNullOrUndefined } from '../util';

/**
 * validates the abstract control that specifies desire precision
 * @param control is type of 'AbstractControl'
 * @returns ValidationErrors if logic satifies else null
 */
export const decimalPrecision = (precision: number): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    return !isNullOrUndefined(control) && !isNaN(precision)
      ? control.value.toString().split('.')[1]
        ? control.value.toString().split('.')[1].length > precision
          ? {
              decimalPrecision: {
                decimalPrecision: precision,
                actual: control.value,
              },
            }
          : null
        : null
      : null;
  };
};
