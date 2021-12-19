import { NgModule, Type } from '@angular/core';
import { decimalPrecision } from './decimalPrecision/validator';
import { isNegative } from './negativeInteger/validator';
import { whitespace } from './whitespace/validator';

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
