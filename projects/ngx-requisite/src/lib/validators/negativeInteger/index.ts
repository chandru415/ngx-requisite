import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { isNullOrUndefined } from '../../util';

/**
 * validates the abstract control value that should not be less than '0'
 * @param control is type of 'AbstractControl'
 * @returns ValidationErrors if logic satisfies else null
 */
export const isNegative: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  return !isNullOrUndefined(control)
    ? Number(control.value) < 0
      ? { isNegative: true }
      : null
    : null;
};
