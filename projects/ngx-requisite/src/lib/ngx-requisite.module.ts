import { NgModule, Type } from '@angular/core';
import { decimalPrecision } from './validators/decimalPrecision';
import { greaterthan } from './validators/greaterthan';
import { greaterthanOrEqual } from './validators/greaterthanOrEqual';
import { lessthan } from './validators/lessthan';
import { lessthanOrEqual } from './validators/lessthanOrEqual';
import { isNegative } from './validators/negativeInteger';
import { whitespace } from './validators/whitespace';

export const requisiteValidators = {
  whitespace,
  isNegative,
  decimalPrecision,
  lessthan,
  lessthanOrEqual,
  greaterthan,
  greaterthanOrEqual
};

const requisiteDirectives: any[] | Type<any> = [];

@NgModule({
  declarations: [requisiteDirectives],
  imports: [],
  exports: [requisiteDirectives],
})
export class NgxRequisiteModule {}
