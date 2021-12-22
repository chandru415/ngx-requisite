import { NgModule, Type } from '@angular/core';
import { decimalPrecision } from './validators/decimalPrecision';
import { isNegative } from './validators/negativeInteger';
import { whitespace } from './validators/whitespace';

export const requisiteValidators = {
  whitespace,
  isNegative,
  decimalPrecision
};

const requisiteDirectives: any[] | Type<any> = [];

@NgModule({
  declarations: [requisiteDirectives],
  imports: [],
  exports: [requisiteDirectives],
})
export class NgxRequisiteModule {}
