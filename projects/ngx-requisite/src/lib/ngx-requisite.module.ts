import { NgModule, Type } from '@angular/core';
import { SafeHtmlPipe } from './pipes/safeHtml';
import { SafeUrlPipe } from './pipes/safeUrl';
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
  greaterthanOrEqual,
};

const requisiteDirectives: any[] | Type<any> = [];

const requisitePipes: any[] | Type<any> = [SafeUrlPipe, SafeHtmlPipe];

@NgModule({
  declarations: [requisiteDirectives, requisitePipes],
  imports: [],
  exports: [requisiteDirectives, requisitePipes],
})
export class NgxRequisiteModule {}
